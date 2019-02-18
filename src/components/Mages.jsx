import React, { useState } from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import useSelectedSets from '../hooks/useSelectedSets.jsx'
import config from '../config'

import ShuffleButton from './ShuffleButton'

const getListOfAvailableMages = (selectedSets) => selectedSets.reduce(
  (acc, set) => {
    return [ ...acc, ...config.DATA[set].mages ]
  },[]
)

const getRandomMage = (availableMages) => availableMages[Math.floor(Math.random() * availableMages.length)]

const createSlotList = (amount) => {
    return Array.from({ length: amount }, (_, i) => 0 + i);
}

const createMageList = (availableMages, amount) => {
  const slotList = createSlotList(amount)
  const mages = slotList.reduce(
    (acc, slot, i) => {
      const lastMage = i === slotList.length - 1
      const newMage = getRandomMage(acc.availableMages)
      
      if (lastMage) {
        return [ ...acc.result, newMage]
      }

      const remainingMages = acc.availableMages.filter(
        mage => mage.name !== newMage.name
      )

      return { 
        availableMages: remainingMages,
        result: [ ...acc.result, newMage]
      }
  }, { availableMages, result: [] })

  return mages
}

const Mages = () => {
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const [mages, setMages] = useState([])
  const [amount, setAmount] = useState(1)
  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const availableMages = getListOfAvailableMages(selectedSets)
  const handleShuffle = () => {
    const mages = createMageList(availableMages, amount)
    setMages(mages)
  }

  // Small hack to determine, if we have already got mages
  const firstSlotStillEmpty = mages[0] === 1 || mages.length === 0

  return (
    <React.Fragment>
      <FormControl component="fieldset">
          <FormLabel component="legend">Amount of Mages</FormLabel>
          <RadioGroup
            aria-label="Amount of Mages"
            name="mageAmount"
            value={amount.toString()}
            onChange={handleAmountChange}
          >
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
          </RadioGroup>
        </FormControl>
      {
        firstSlotStillEmpty
          ? <Typography>Tap button to recruit mages</Typography>
          : <List>
            {
              mages.map(mage => (
                <ListItem>
                  <ListItemText>{mage.name}, {mage.set}</ListItemText>
                </ListItem>
              ))
            }
          </List>
      }
      <ShuffleButton
        onClick={handleShuffle}
        color="primary" 
        variant="extended"
      >
        Recruit Mages
      </ShuffleButton>
    </React.Fragment>
  )
}

export default Mages
