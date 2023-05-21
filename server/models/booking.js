// export default (sequelize, DataTypes) => {
//   const consulting = sequelize.define(
//     "consulting", 
//     {
//       firstname: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           lastname: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           email: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           phonenumber: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           companyname: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           companyurl: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           Industry: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           Pickdate: {
//             type: DataTypes.STRING,
//             allowNull: false
//           },
//           Whatisyourissue: {
//             type: DataTypes.STRING,
//             allowNull: false
//           }
//     },
//     {
//       // Options
//       timestamps: true,
//       underscrored: true,
//       createdAt: "created_at",
//       updatedAt: "updated_at"
//     }
//   );

//   return consulting;
// };