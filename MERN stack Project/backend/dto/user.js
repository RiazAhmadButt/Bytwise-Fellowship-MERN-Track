class userDTO {
    constructor(user){
        this._id = user._id,
        this.userName = user.userName,
        this.email = user.email
    }
}

module.exports = userDTO; 