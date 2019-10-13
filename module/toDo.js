module.exports = (sequelize, DataTypes) => {
    
    const toDo = sequelize.define('ToDoList', {

        ID:DataTypes.NUMERIC(15),
    },{});
}