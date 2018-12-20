import {
  REVICE_HOSPROVINCE,
  REVICE_HOSKEYPOINT,
  REVICE_COMPANYREGION,
  REVICE_COMPANYSERVERTYPE,
} from './mutation-types'

export default {
  [REVICE_HOSPROVINCE](state, {province}) {
    state.hosProvince = province
  },
  [REVICE_HOSKEYPOINT](state, {keypoint}) {
    state.hosKeyPoint = keypoint
  },
  [REVICE_COMPANYREGION](state, {proCity}) {
    state.companyRegion = proCity
  },
  [REVICE_COMPANYSERVERTYPE](state, {servertype}) {
    state.companyServerType = servertype
  },
}
