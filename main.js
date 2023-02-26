let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#060047;">Desarrollo sitios web y realizo estrategias de marketing digital.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
