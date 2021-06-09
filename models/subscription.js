module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define("subscription", {
        subscriptionId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        locationName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subCityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        distributorNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Subscription
}