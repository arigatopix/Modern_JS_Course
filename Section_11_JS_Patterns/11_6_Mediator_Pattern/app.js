/********************************************
 *!          Mediator Pattern (สื่อกลาง)
**********************************************/
// เช่นทำ interface สำหรับ comunication เรียก colleagues (เพื่อนร่วมงาน)
// ทำพวก chat room เช่น socket.io แต่อันนี้เป็น Basic
// Chatroom เป็น Mediator และ User colleagues กับ Chatroom

// USER Constructor
const User = function (name) {
  // สร้าง user
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  // มีไว้เพื่อเป็นโครงสร้าง user อะไร ส่งหรือรับข้อความอะไร
  // * จำไว้ว่าสร้างเหมือน object และ IFEs

  send: function (message, to) {
    this.chatroom.send(message, this, to);
    // เรียกใช้ prototype ของ Chatroom
    // this คือ user to คือปลายทาง
  },

  recieve: function (message, from) {
    // รับข้อคาม มาจากใคร ข้อความว่าอะไร
    console.log(`${from.name} to ${this.name} : ${message}`);

  }
}



const Chatroom = function () {
  // method เพื่อสร้างห้องแชท (register) มีใครเข้ามาบ้าง เพื่อ colleagues Users
  let users = {}; // list of users

  return {
    // ส่วนที่ User จะเอาไปใช้ (Public function)
    register: function (user) {
      users[user.name] = user; // หมายถึง เพิ่ม user ที่ได้รับมาจากการสร้าง instance User (user.name) เพิ่มลงใน list users (line 36)
      user.chatroom = this;
      // this คือห้องแชท
    },

    send: function (message, from, to) {
      // ห้องแชทเป็นตัวกลางเพื่อส่งข้อมูล จากใครถึงใคร
      // เป็น function เดียวกันกับ line 20 โดย from คือ this ของ User

      if (to) {
        // Single user recieve ระบุคนรับ
        to.recieve(message, from);
      } else {
        // Mass message คือไม่ระบุคนรับ ก็จะส่งให้ทุกคนใน chat (list users ในห้องแชท)

        for (key in users) {
          // ส่งให้ใครบ้างผ่าน for... in ยกเว้นตัวคนส่งข้อความ
          if (users[key] !== from) {
            // ส่งข้อความให้ทุกคน ยกเว้นคนที่ส่ง
            users[key].recieve(message, from);
          }
        }
      }
    }
  }
}

// Create user
const bas = new User('Bas');
const aiib = new User('Aiib');
const farm = new User('Farm');

// Init Chatroom
const chatroom = new Chatroom();

// register to chatroom
chatroom.register(bas);
chatroom.register(aiib);
chatroom.register(farm);


// ทดลองส่งข้อความ

bas.send('Hello Aib', aiib);
aiib.send('Hello Farm', farm);
farm.send('Hello everyone'); // จะแสดง 2 บรรทัด เพราะส่งให้อีกสองคน