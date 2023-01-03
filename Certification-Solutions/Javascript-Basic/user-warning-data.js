class User {
    constrcutor(userName) {
        this.userName = userName;
        this.count = 0;
    }
    getUserName() {
        return this.userName;
    }
    setUserName(userName) {
        this.userName = userName;
    }
}

class ChatUser extends User {
    constructor(userName, counts) {
        super(userName);
        this.userName = userName;
        this.counts = 0;
    }

    giveWarning = () => {
        this.counts++;
    }

    getWarningCount = () => {
        return this.counts;
    };
    
    setUsername = (userName) => this.setUserName(userName);
    getUsername = () => this.getUserName();

}
