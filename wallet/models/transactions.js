const User = require("./user") // requerimos al modelo usuario para asociarlo luego a las transacciones

module.exports = (sequelize, DataTypes) => { 

    let cols = { // definimos las columnas de nuestro modelo transacciones
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        de: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        para: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detalle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: { type: DataTypes.INTEGER, allowNull: false },
        createdAt: { type: date},
        deletedAt: {type: date}
    };


    let config = { tableName: "Transactions", timestamps: true }; // configuramos el nombre y seteamos timestamps true a nuestro modelo

    const Transaction = sequelize.define("Purchase", cols, config); // definimos nuestro modelo
    //empezamos a hacer las asociaciones con el modelo usuario
    Purchase.associate = function (models) {
       Purchase.belongsTo(models.User, {   // definimos que un usuario envia 
            as: 'De',
            foreignKey: 'UserId'
        }),
        Purchase.belongsTo(models.User, { // definimos que un usuario recibe
            as: 'Para',
            foreignKey: 'UserId'
        })
    }
    return Transaction;


}