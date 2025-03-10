import { IExpansionData } from '../../../aer-types/types'

import { aeonsEndData } from './aeonsEnd'
import { buriedSecretsData } from './buriedSecrets'
import { intoTheWildData } from './intoTheWild'
import { legacyData } from './legacy'
import { newAgeData } from './theNewAge'
import { outerDarkData } from './outerDark'
import { promosData } from './promos'
import { shatteredDreamsData } from './shatteredDreams'
import { theAncientsData } from './theAncients'
import { theDepthsData } from './theDepths'
import { theNamelessData } from './theNameless'
import { theVoidData } from './theVoid'
import { warEternalData } from './warEternal'
import { outcastsData } from './outcasts'
import { returnToGraveholdData } from './returnToGravehold'
import { southernVillageData } from './southernVillage'
import { theRuinsData } from './theRuins'

const ENG: IExpansionData = {
  AE: aeonsEndData,
  BS: buriedSecretsData,
  Depths: theDepthsData,
  IW: intoTheWildData,
  Legacy: legacyData,
  NA: newAgeData,
  Nameless: theNamelessData,
  OD: outerDarkData,
  SD: shatteredDreamsData,
  TA: theAncientsData,
  TV: theVoidData,
  WE: warEternalData,
  O: outcastsData,
  RTG: returnToGraveholdData,
  SV: southernVillageData,
  RU: theRuinsData,
  promos: promosData,
}

export default ENG
