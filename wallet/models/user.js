module.exports = (sequelize, dataTypes) => { // tomo los objetos sequelize y datasTypes para poder crear los modelos.

    let cols = { // defino las columnas de mi tabla
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        ocupation: {
            type:dataTypes.STRING,
            allowNull:false,
            unique:false
        },
        active: {
            type:dataTypes.BOOLEAN,
            allowNull:false,
            unique:false
        }
    };

    let config = { tableName: "Users", timestamps: false }; // defino la configuracion de mi modelo

    const User = sequelize.define("User", cols, config); // defino el modelo con sus parámetros

    User.associate = (models) => { //creamos las asociaciones necesarias con las otras tablas

        User.hasMany(models.Transactions, { // definimos que un usuario puede hacer muchas transacciones
            as: 'De'    
        }),
        User.hasMany(models.Transactions, { // definimos que un usuario puede recibir muchas transacciones
            as: 'Para'    
        })
      
    }
    return User;
}
