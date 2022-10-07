module.exports = (sequelize, DataTypes) => {

    let cols = { id: { type: DataTypes.INTEGER,
                       autoIncrement: true,
                       primaryKey:true},
                 founds: { type: DataTypes.INTEGER,
                            allowNull: false,
                            }
                };

    let config = {tableName: "Wallet",timestamps : false}

    const Wallet = sequelize.define("Wallet", cols, config);

    Wallet.associate = (models)=>{
      Wallet.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'UserId'
      });

  }

    return Wallet;
}