export default (state = {reduxCounter: 0}, action) => {
    switch (action.type) {
        case 'Counter':
        return {
            reduxCounter: state + 1
        }
        default:
            return state
    }
}
