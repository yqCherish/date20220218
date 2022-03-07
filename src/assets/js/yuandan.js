function loadStatic(arr) {
  let promises = [];
  for(let i=0;i<arr.length;i++) {
    let promise  = new Promise((resolve, reject) => {
      console.log("load", arr[i]);
      let img = new Image();
      img.src = arr[i];
      img.onload = () => {
        resolve(img);
      }
      img.onerror = (e) => {
        console.log(e);
      }
    })
    promises.push(promise);
  }
  return Promise.all(promises)
}

export const loadSmokeFire = () => {
  loadStatic([require('@/assets/images/page1_text.png'), require('@/assets/images/page2_text.png'), require('@/assets/images/page3_text.png'), require('@/assets/images/page4_text.png')]).then((statics) => {
    musicBg();
    countDown();

    function musicBg() {
      let music = document.querySelector('#music');
      let musicAudio = music.querySelector('audio');
      let fireSoundAudios = document.querySelectorAll('#fireSound audio');
      musicAudio.volume = 0.2;
      music.addEventListener('click', function () {
        if (musicAudio.paused) {
          this.className = 'run';
          musicAudio.play();
          for (let i = 0; i < fireSoundAudios.length; i++) {
            fireSoundAudios[i].play();
            fireSoundAudios[i].muted = true;
            fireSoundAudios[i].currentTime = i;
          }
        } else {
          this.className = '';
          musicAudio.pause();
          for (let i = 0; i < fireSoundAudios.length; i++) {
            fireSoundAudios[i].pause();
          }
        }
      });
    }

    function countDown() {
      let page1 = document.querySelector('#page1');
      let page2 = document.querySelector('#page2');
      page1.style.display = 'none';
      page2.style.display = 'block';
      initFires();
    }

    function initFires() {
      let canvas = document.querySelector('#page2 canvas');
      let ctx = canvas.getContext('2d');
      let fireSoundAudios = document.querySelectorAll('#fireSound audio');
      let width = window.innerWidth;
      let height = window.innerHeight;
      let balls = [];
      let fires = [];
      let textFires = [];
      let timer = null;
      let count = 0;
      let ballsAll = 10;
      let textsAll = 3;
      let textsPos = [
        {x: width / 4, y: height / 4 + 30},
        {x: width / 4 * 3, y: height / 4 - 30},
        {x: width / 2, y: height / 2},
        {x: width / 4, y: height / 4 * 3},
      ];
      let points1 = getImagePoints(statics[0], 4);
      let points2 = [];
      for (let i = 1; i < statics.length; i++) {
        points2.push(getImagePoints(statics[i], 4));
      }
      canvas.width = width;
      canvas.height = height;


      timer = setInterval(() => {
        if (count == ballsAll) {
          clearInterval(timer);
          count = 0;
          timer = null;
          //------------------------------------------------
          balls.push(
            new Ball({
              x: width / 2,
              y: height,
              vx: 0,
              vy: -10,
              end() {
                if (this.vy > 1) {
                  balls.splice(balls.indexOf(this), 1);
                  for (let i = 0; i < 60; i++) {
                    let power = Math.random() * 10;
                    let vx = Math.cos(i * 6 * Math.PI / 180) * power;
                    let vy = Math.sin(i * 6 * Math.PI / 180) * power;
                    fires.push(
                      new Fire({
                        r: 3,
                        x: this.x,
                        y: this.y,
                        vx: vx,
                        vy: vy,
                        g: 0.05,
                        end() {
                          if (this.life < 10) {
                            fires.splice(fires.indexOf(this), 1);
                          }
                        }
                      })
                    );
                  }

                  for (let i = 0; i < points1.length; i++) {
                    let power = 0.05;
                    let vx = (points1[i].x - points1.w / 2) * power;
                    let vy = (points1[i].y - points1.h / 2) * power;
                    textFires.push(
                      new TextFire({
                        x: this.x,
                        y: this.y,
                        vx: vx,
                        vy: vy,
                        g: 0.03,
                        life: 200,
                        r: 1,
                        end() {
                          if (this.life < 10) {
                            textFires.splice(textFires.indexOf(this), 1);
                          }
                        }
                      })
                    );
                  }

                  timer = setInterval(() => {
                    if (count == textsAll) {
                      clearInterval(timer);
                      count = 0;
                      timer = null;
                    } else {
                      count++;
                      console.log("count", count);
                      //---------------------------------------
                      let nowPos = textsPos.pop();
                      let power = 0.01;
                      let vx = (nowPos.x - width / 2) * power;
                      let vy = (nowPos.y - height) * power;
                      balls.push(
                        new Ball({
                          x: width / 2,
                          y: height,
                          r: 3,
                          vx: vx,
                          vy: vy,
                          tx: nowPos.x,
                          ty: nowPos.y,
                          index: count - 1,
                          g: 0,
                          end() {
                            if (this.y - this.ty < 0) {
                              balls.splice(balls.indexOf(this), 1);
                              for (let i = 0; i < 60; i++) {
                                let power = Math.random() * 10;
                                let vx = Math.cos(i * 6 * Math.PI / 180) * power;
                                let vy = Math.sin(i * 6 * Math.PI / 180) * power;
                                fires.push(
                                  new Fire({
                                    r: 1,
                                    x: this.x,
                                    y: this.y,
                                    vx: vx,
                                    vy: vy,
                                    g: 0,
                                    life: 300
                                  })
                                );
                              }
                              for (let i = 0; i < points2[this.index].length; i++) {
                                let power = 0.05;
                                let vx = (points2[this.index][i].x - points2[this.index].w / 2) * power;
                                let vy = (points2[this.index][i].y - points2[this.index].h / 2) * power;
                                textFires.push(
                                  new TextFire({
                                    x: this.x,
                                    y: this.y,
                                    vx: vx,
                                    vy: vy,
                                    g: 0,
                                    fs: 0.92,
                                    life: 300,
                                    r: 1
                                  })
                                );
                              }
                            }
                          }
                        })
                      );
                      //---------------------------------------
                    }
                  }, 300);

                }
              }
            })
          );
          //------------------------------------------------

        } else {
          count++;
          //-----------------------------------------------
          balls.push(
            new Ball({
              r: 3,
              x: Math.random() * width / 3 + width / 3,
              y: height,
              vx: Math.random() * 2 - 1,
              vy: -Math.random() * 2 - 9,
              end() {
                if (this.vy > 1) {
                  balls.splice(balls.indexOf(this), 1);
                  let size = Math.random() * 10;
                  for (let i = 0; i < 60; i++) {
                    let power = Math.random() * size;
                    let vx = Math.cos(i * 6 * Math.PI / 180) * power;
                    let vy = Math.sin(i * 6 * Math.PI / 180) * power;
                    fires.push(
                      new Fire({
                        r: 3,
                        x: this.x,
                        y: this.y,
                        vx: vx,
                        vy: vy,
                        g: 0.05,
                        end() {
                          if (this.life < 10) {
                            fires.splice(fires.indexOf(this), 1);
                          }
                        }
                      })
                    );
                  }
                }
              }
            })
          );
          //-----------------------------------------------
        }
      }, 500);

      loop();

      function loop() {

        if (balls.length) {
          for (let i = 0; i < fireSoundAudios.length; i++) {
            fireSoundAudios[i].muted = false;
          }
          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fillRect(0, 0, width, height);
        } else {
          for (let i = 0; i < fireSoundAudios.length; i++) {
            fireSoundAudios[i].muted = true;
          }
          ctx.fillStyle = 'rgb(0, 0, 0)';
          ctx.fillRect(0, 0, width, height);
        }


        for (let i = 0; i < balls.length; i++) {
          balls[i].update();
          balls[i].render();
        }

        for (let i = 0; i < fires.length; i++) {
          fires[i].update();
          fires[i].render();
        }

        for (let i = 0; i < textFires.length; i++) {
          textFires[i].update();
          textFires[i].render();
        }

        requestAnimationFrame(loop);
      }

      class Ball {
        constructor(options) {
          this.settings = Object.assign({
            color: 'yellow',
            r: 5,
            g: 0.1,
            end() {
            }
          }, options);
          for (let attr in this.settings) {
            this[attr] = this.settings[attr];
          }
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.g;
        }

        render() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.r, 0, 360 * Math.PI / 180);
          ctx.closePath();
          ctx.fill();
          this.end();
        }
      }

      class Fire {
        constructor(options) {
          this.settings = Object.assign({
            color: 'yellow',
            r: 5,
            g: 0.1,
            fs: 0.95,
            life: 100,
            end() {
            }
          }, options);
          for (let attr in this.settings) {
            this[attr] = this.settings[attr];
          }
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += this.g;
          this.vx *= this.fs;
          this.vy *= this.fs;
          if (this.life > 0 && this.life < 300) {
            this.life--;
          }
        }

        render() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.r * Math.min(this.life, 100) / 100, 0, 360 * Math.PI / 180);
          ctx.closePath();
          ctx.fill();
          this.end();
        }
      }

      class TextFire {
        constructor(options) {
          this.settings = Object.assign({
            color: 'yellow',
            r: 5,
            g: 0.1,
            fs: 0.95,
            life: 100,
            end() {
            }
          }, options);
          for (let attr in this.settings) {
            this[attr] = this.settings[attr];
          }
        }

        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.life < 100) {
            this.vy += this.g;
          }
          this.vx *= this.fs;
          this.vy *= this.fs;
          if (this.life > 0 && this.life < 300) {
            this.life--;
          }
        }

        render() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.r * Math.min(this.life, 100) / 100, 0, 360 * Math.PI / 180);
          ctx.closePath();
          ctx.fill();
          this.end();
        }
      }

      function getImagePoints(img, level = 5) {
        let width = img.width;
        let height = img.height;
        let points = [];
        let x = Math.floor(width / level);
        let y = Math.floor(height / level);
        let imgData = null;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.drawImage(img, 0, 0);
        ctx.closePath();
        imgData = ctx.getImageData(0, 0, width, height);
        ctx.clearRect(0, 0, width, height);
        points.w = width;
        points.h = height;

        for (let i = 0; i < y; i++) {
          for (let j = 0; j < x; j++) {
            let colors = getImageColor(imgData, j * level, i * level);
            if (colors[0] == 255) {
              points.push({x: j * level, y: i * level});
            }
          }
        }

        return points;
      }

      function getImageColor(imgData, x, y) {
        let w = imgData.width;
        let h = imgData.height;
        let d = imgData.data;
        let colors = [];
        colors[0] = d[(y * w + x) * 4];
        colors[1] = d[(y * w + x) * 4 + 1];
        colors[2] = d[(y * w + x) * 4 + 2];
        colors[3] = d[(y * w + x) * 4 + 3];
        return colors;
      }

    }

  });
}


