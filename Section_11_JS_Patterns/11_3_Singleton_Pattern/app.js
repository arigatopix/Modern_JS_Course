/********************************************
 *!          Singleton Pattern
**********************************************/
// immediate anomymous function
// return one instance of a time ใช้ได้แค่อย่างเดียว
// This pattern allows you to create an object that has only one instance. ประกาศใช้ตรงไหน ที่อื่นๆ ใน app เปลี่ยนหมด
// ถ้าเรา design ให้ function นี้ใช้กับหลายๆ ที่ใน  application ถ้ามีการเปลี่ยนแปลงค่า ทั้ง app ก็จะเปลี่ยนตามกันไปหมด

const Singleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object({id : 1 , name: 'John'});
    return object;
  }

  return {
    getInstance : function() {
      if(!instance) {
        // ถ้ายังไม่เคยสร้าง ให้เรียกใช้งาน
        instance = createInstance();
      } 
      return instance;
      // ถ้าประกาศใช้อีก ให้ตอบคำตอบเดิม
    }
  }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);
const instanceB = Singleton.getInstance();
console.log(instanceB);