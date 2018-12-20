import {
  REVICE_HOSPROVINCE,
  REVICE_HOSKEYPOINT,
  REVICE_COMPANYREGION,
  REVICE_COMPANYSERVERTYPE,
} from './mutation-types'

export default {
  //同步保存医院页面选择的省份
  saveHosprovince({commit}, province) {
    commit(REVICE_HOSPROVINCE, {province})
  },
  //同步保存医院页面选择的关注重点
  saveHosKeypoint({commit}, keypoint) {
    commit(REVICE_HOSKEYPOINT, {keypoint})
  },
  //同步保存公司页面选择的省市
  saveComanyRegion({commit}, proCity) {
    commit(REVICE_COMPANYREGION, {proCity})
  },
  //同步保存公司页面选择的服务项目
  saveCompanyServertype({commit}, servertype) {
    commit(REVICE_COMPANYSERVERTYPE, {servertype})
  },
}
