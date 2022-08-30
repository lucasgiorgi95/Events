//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Event, User } = require('./src/db.js');
const event =require('./src/helper/event.json')
const user =require('./src/helper/user.json')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(4000, async () => {
    await Event.bulkCreate(event.data)
    await User.bulkCreate(user.data)
    const user1 = await User.findByPk(1)
    const event4 = await Event.findByPk(5)
    await user1.setEvents(event4)
    const user2 = await User.findByPk(2)
    const event5 = await Event.findByPk(6)
    await user2.setEvents(event5)
    console.log(' listening at 4000');
  });
});
