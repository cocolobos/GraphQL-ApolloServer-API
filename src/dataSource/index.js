import SessionAPI from "./sessions.js"

const dataSources = () => ({
    sessionsAPI: new SessionAPI()
})

export default dataSources