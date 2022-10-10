const User = require("./user") // requerimos al modelo usuario para asociarlo luego a las transacciones

module.exports = (sequelize, DataTypes) => {

    let cols = { // definimos las columnas de nuestro modelo transacciones
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        detalle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total: { type: DataTypes.INTEGER, allowNull: false }
    };


    let config = { tableName: "Transactions", timestamps: true }; // configuramos el nombre y seteamos timestamps true a nuestro modelo

    const Transactions = sequelize.define("Transactions", cols, config); // definimos nuestro modelo
    //empezamos a hacer las asociaciones con el modelo usuario
    Transactions.associate = function (models) {
        Transactions.belongsTo(models.User, {   // definimos que un usuario envia 
            as: 'De',
            foreignKey: 'UserId'
        }),
            Transactions.belongsTo(models.User, { // definimos que un usuario recibe
                as: 'Para',
                foreignKey: 'UserId'
            })
    }

    return Transactions;
    
}