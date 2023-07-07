import { DataSource } from "apollo-datasource";
import mockSessions from "../data/sessions.json" assert { type: "json" };

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {}
    getSessions() {
        return mockSessions;
    }
}

export default SessionAPI;
