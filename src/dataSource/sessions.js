import { DataSource } from "apollo-datasource";
import mockSessions from "../data/sessions.json" assert { type: "json" };
import _ from "lodash";

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {}
    getSessions(args) {
        return _.filter(mockSessions, args);
    }
    getSessionById(id) {
        const filteredSession = _.filter(mockSessions, { id: parseInt(id)});
        return filteredSession[0]
    }
}

export default SessionAPI;
