import featureFMService from '../services/featureFMService.js'
export const GET_DATA = '/GET_DATA'
const SET_DATA = '/SET_DATA'

// const store = {
    // strict: true;
    const state = {
        songData: null
    }
    
    const mutations = {
        [SET_DATA] ({ commit }, { songData }) {
            state.songData = songData
        }
    }
    
    const actions = {
        [GET_DATA] ({ commit }, { shortId }) {
            featureFMService.getData(shortId)
            // console.log('jsonData', jsonData)
                .then(songData => {
                    // console.log('songData:', songData.data)
                    commit({ type: SET_DATA, songData: songData.data } )
                })
        }
    }
    
    const getters = {
        getSongData(state) {
            return state.songData;
        }
}


// export default store;
export default {
    state,
    actions,
    mutations,
    getters
};