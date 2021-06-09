module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        subscriptionId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deliveryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    return Order
}