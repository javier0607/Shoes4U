const { Model, Datatypes } = require("sequalize");
const sequalize = require("../config/connections");

// Shoe name model

class shoeModels extends Model {}

shoeModels.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        {
            sequalize,
            modelName:"",
            timestamps: false,
        }
    
);

module.exports = shoeModels;