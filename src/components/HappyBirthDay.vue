import typed from "typed.js"
<template>

  <div id="div_container"> <!-- 最外层div，用于居中兼容PC和移动 -->

    <div id="div_start_bg"></div> <!-- 用于遮挡主题，作为片头的背景 -->

    <!-- 以上是动画和视频片头 -->
    <div id="div_dbcake" style="display: block; height: 722px;"><!-- 用于设置背景 -->
      <div id="div_dbcake_inner"><!-- 用于存放文字div -->

        <!--  开头部分的文字输入   -->
        <div id="div_dbacke_access">
          <h1>生日快乐</h1>

          <!--  2个文本输入框 -->
          <input id="input_award" type="text" autofocus="autofocus"
                 placeholder="祝今天的小可爱生日快乐哟 答案好的" v-on:input="show_dbcake_btn" maxlength="10">
          <!--                 placeholder="今天过生日的小可爱叫什么名字" v-on:input="show_dbcake_btn" maxlength="10">-->
          <input id="input_award_btn" type="button" value="点这里打开惊喜" v-on:click="show_dbcake">
        </div>

        <!--  蛋糕动画  -->
        <div id="div_dbcake_cake">
          <div class="velas">
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
          </div>

          <svg id="svg_dbcake" version="1.1" x="0px" y="0px" width="200px" height="500px" viewBox="0 0 200 500"
               enable-background="images/1b3ee5ac82134b09962e06b6a031fd91.gif" xml:space="preserve">
                            <path fill="#a88679" d="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z">
                                <animate id="bizcocho_3" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1" begin="relleno_2.end" dur="0.3s" fill="freeze"
                                         values="
                                                  M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z
                                                  ;
                                                  M173.667,411.567c-47.995,12.408-102.955,12.561-147.334,0
                                c-3.848-1.089-0.189-16.089,3.661-15.002c44.836,12.66,90.519,12.753,139.427,0.07
                                C173.293,395.631,177.541,410.566,173.667,411.567z
                                                  ;
                                                  M173.667,427.569c-49.795,0-101.101,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c46.385,0,97.539,0,147.334,0C177.668,411.567,177.667,427.569,173.667,427.569z
                                                  "/>
                            </path>
            <path fill="#8b6a60" d="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
                                c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
                                L100-178.521z">
                                <animate id="relleno_2" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_2.end" dur="0.5s"
                                         fill="freeze" values="
                                                  M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
                                c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
                                L100-178.521z
                                                  ;
                                                  M100,267.257c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
                                c0,19.143,0,57.43,0,76.574c0,10.151,0,40.606,0,40.606c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364
                                c0,0,0-30.455,0-40.606c0-19.145,0-57.432,0-76.576c0-11.057,0-44.225,0-44.225C96.636,268.763,98.142,267.257,100,267.257
                                L100,267.257z
                                                  ;
                                                  M93.928,405.433c-0.655,6.444-0.102,9.067,2.957,11.798c0,0,8.083,5.571,16.828,3.503
                                c18.629-4.406,43.813,6.194,50.792,7.791c14.75,3.375,9.162,6.867,9.162,6.867c-2.412,2.258-58.328,0-73.667,0l0,0
                                c-1.858,0-69.995,2.133-73.667,0c0,0-3.337-2.439,6.172-5.992c11.375-4.25,52.875,8.822,47.139-9.442
                                c-6.333-20.167,5.226-21.514,5.226-21.514c3.435-0.915,12.78-6.663,10.923-0.546L93.928,405.433z
                                                  ;
                                                  M102.242,427.569c5.348,0,14.079,0,17.462,0c0,0,17.026,0,27.504,0
                                c19.143,0,20.39-3.797,26.459,0c3,1.877,0,7.823,0,7.823c-2.412,2.258-58.328,0-73.667,0l0,0c-1.858,0-67.187,0-73.667,0
                                c0,0-4.125-4.983,0-7.823c5.201-3.58,16.085,0,23.725,0c8.841,0,20.762,0,20.762,0c3.686,0,8.597,0,19.511,0H102.242z
                                                  "/>
                            </path>
            <path fill="#a88679" d="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z">
                                <animate id="bizcocho_2" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.58 1" begin="relleno_1.end" dur="0.5s"
                                         fill="freeze" values="
                                                  M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z
                                                  ;
                                                  M173.434,445.393c-47.269,8.001-105.245,8.001-147.334,0c-3.929-0.747-0.692-16.543,3.243-15.824
                                c43.828,8.001,92.165,8.001,140.739,0C174.029,428.918,177.377,444.726,173.434,445.393z
                                                  ;
                                                  M173.667,449.514c-47.576-5.454-102.799-5.744-147.333,0c-3.966,0.512-3.938-15.297,0-16.002
                                c43.683-7.823,97.646-8.026,147.333,0C177.616,434.15,177.642,449.969,173.667,449.514z
                                                  ;
                                                  M173.667,451.394c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
                                c44.697,0,96.586,0,147.334,0C177.667,435.392,177.668,451.394,173.667,451.394z
                                                  "/>
                            </path>
            <path fill="#8b6a60" d="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
                                c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
                                C98.411-75.883,101.368-75.592,101.368-73.685z">
                                <animate id="relleno_1" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1; 0 0 0.6 1" begin="bizcocho_1.end" dur="0.5s"
                                         fill="freeze" values="
                                                  M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
                                c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
                                C98.411-75.883,101.368-75.592,101.368-73.685z
                                                  ;
                                                  M101.368,350.885c0,12.164,0,65.18,0,78.518c0,22.703,0-33.66,0-11.695c0,14.48,0,28.232,0,40.512
                                c0,1.753-2.958,1.847-2.958,0c0-12.68,0-26.277,0-40.402c0-21.982,0,31.66,0,11.695c0-13.027,0-65.992,0-78.627
                                C98.411,348.686,101.368,348.977,101.368,350.885z
                                                  ;
                                                  M128.38,447.567c37.626,6.312,39.303,13.658,26.833,12.833c-22.653-1.499-13.636-0.831-23.302-0.831
                                c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-14.062,5.995-27.532,1.164
                                c-12.629-4.529,38.667-3.167,46.833-17.333C100.077,432.94,105.546,443.736,128.38,447.567z
                                                  ;
                                                  M173.667,451.394c2.875,0,2.997,9.257,0,9.131c-22.662-0.956-32.09-0.956-41.756-0.956
                                c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-34.99-0.294-48.412,1.831
                                c-4.109,0.65-3.01-10.006,0-10.006C37.129,451.394,149.379,451.394,173.667,451.394z
                                                  "/>
                            </path>
            <path fill="#a88679" d="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
                                C177.668,5.569,177.667,21.571,173.667,21.571z">
                                <animate id="bizcocho_1" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0.25 0 0.6 1"
                                         begin="indefinite" dur="0.8s" fill="freeze" values="
                                                  M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
                                C177.668,5.569,177.667,21.571,173.667,21.571z
                                                  ;
                                                  M173.667,459.569c-33.197,16.002-110.782,16.002-147.334,0c-3.664-1.604,1.614-15.617,5.337-14.153
                                c40.702,16.002,94.289,16.104,136.505,0.103C171.917,444.1,177.271,457.832,173.667,459.569z
                                                  ;
                                                  M171.817,475.571c-39.361-3.001-105.438-2.571-143.556,0c-3.991,0.27-7.377-14.736-3.387-15.014
                                c41.553-2.888,104.421-3.121,150.51-0.233C179.378,460.574,175.806,475.875,171.817,475.571z
                                                  ;
                                                  M171.817,459.564c-38.8-12.188-104.504-13.762-143.556,0c-3.772,1.329-7.961-12.604-4.178-13.905
                                c40.864-14.064,105.114-15.52,151.918-0.973C179.822,445.874,175.634,460.762,171.817,459.564z
                                                  ;
                                                  M173.667,475.571c-46.376-5.005-105.924-4.003-147.334,0c-3.981,0.385-3.479-15.421,0.479-16.002
                                c43.087-6.327,97.705-7.083,146.855,0.438C177.621,460.613,177.644,476,173.667,475.571z
                                                  ;
                                                  M173.667,474.117c-46.376,1.866-105.638,2.01-147.334,0c-3.995-0.192-3.52-16.144,0.479-16.002
                                c43.794,1.55,96.341,1.541,145.723,0C176.532,457.99,177.663,473.956,173.667,474.117z
                                                  ;
                                                  M173.667,475.571c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002c43.566,0,97.96,0,147.334,0
                                C177.667,459.569,177.666,475.571,173.667,475.571z
                                                  "/>
                            </path>
            <path fill="#fefae9" d="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
                            c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
                            C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
                            c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z">
                                <animate id="crema" attributeName="d" calcMode="spline"
                                         keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0 0 0.58 1"
                                         begin="bizcocho_3.end" dur="2s" fill="freeze" values="
                                                  M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
                            c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
                            C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
                            c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z
                                                  ;
                                                  M104.812,405.897c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.376
                            c0-5.143,0-15.426,0-20.568c0-7.332,0-21.997,0-29.33c0-5.522,0-16.568,0-22.092c0-3.295,0-9.885,0-13.181
                            c0-3.118,2.165-5.669,4.812-5.669c2.648,0,4.812,2.551,4.812,5.669c0,3.247,0,9.743,0,12.991c0,5.428,0,16.283,0,21.711
                            c0,7.618,0,22.854,0,30.473c0,4.951,0,14.854,0,19.807C104.812,388.972,104.812,400.256,104.812,405.897z
                                                  ;
                                                  M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-7.748,0-10.867,0c-7.086,0-12.698,0-18.292,0
                            c-6.592,0-12.871,7.371-19.166,3.008c-10.043-6.961-7.776-10.169,2.991-17.745c12.61-8.873,27.713,1.994,25.919-7.531
                            c-2.589-13.742,11.008-14.513,11.365-17.789c0.441-4.051,4.235-11.107,8.051-8.175c3.113,2.393,1.007,8.008,0,13.159
                            c-1.871,9.569,8.058,2.113,9.494,14.155c2.592,21.732,21.184-0.675,29.309,7.976c5.216,5.553,18.413,5.552,15.426,12.942
                            c-3.131,7.745-15.825-4.369-23.8,2.903C126.261,418.271,118.301,411.567,111.873,411.567z
                                                  ;
                                                  M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-9.734,4.069-12.853,4.069
                            c-7.086,0-10.712-4.069-16.306-4.069c-6.592,0-12.12,6.013-19.166,3.008c-7.053-3.008-7.458,2.026-18.659,1.165
                            c-6.832-0.525-7.522-3.034-7.533-6.265c-0.037-10.336,22.073-2.452,36.613-2.628c10.234-0.124,19.856-1.439,37.905-2.102
                            c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,29.663-8.99,31.532,3.315c0.773,5.093-5.605,3.342-11.211,9.579
                            c-5.093,5.667-7.59-4.605-12.965-3.832c-8.269,1.189-14.962-8.537-22.937-1.265C126.261,418.271,118.301,411.567,111.873,411.567z
                                                  ;
                                                  M110.946,413.652c-2.904-1.137-8.405-2.748-12.446-0.97c-6.099,2.685-7.273,10.358-13.253,8.242
                            c-7.843-2.775-8.953-5.008-14.546-5.01c-24.653-0.011-4.849,26.507-18.264,26.507c-12.377,0,5.791-33.537-19.422-26.682
                            c-7.703,2.095-9.806-0.942-9.817-4.173c-0.037-10.336,24.357-4.544,38.897-4.72c10.234-0.124,19.856-1.439,37.905-2.102
                            c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,28.973-8.865,31.532,3.315c1.449,6.896,0.318,15.624-3.874,15.624
                            c-7.619,0-1.788-15.192-19.243-7.111c-7.581,3.51-15.963-9.738-26.669,1.066C120.644,426.744,118.381,416.561,110.946,413.652z
                                                  ;
                                                  M111.547,413.9c-2.969-0.956-8.775-0.949-13.167-0.5c-14.667,1.5-8.325,16.508-14.667,16.666
                            c-6.667,0.166-0.167-13.5-13.013-14.151c-30.471-1.545-5.572,46.651-18.987,46.651c-12.377,0,10.333-50.166-18.667-44.5
                            c-7.835,1.531-9.537-1.417-9.548-4.647c-0.037-10.336,23.675-5.177,38.215-5.353c10.234-0.124,20.618-1.671,38.667-2.333
                            c16.642-0.61,32.023,1.458,45.333,1.833c12.438,0.351,33.819-8.431,33.199,4.001c-0.532,10.666,0.414,26.166-5.245,25.833
                            c-7.606-0.447-2.954-31.5-19.243-18.899c-7.985,6.177-17.658-5.969-27.377,5.732C118.88,434.066,121.38,417.067,111.547,413.9z
                                                  ;
                                                  M111.547,415.233c-6.667-0.834-9.667,4.667-13.833,3.333c-19.649-6.291-8.158,22.176-14.5,22.334
                            c-6.667,0.166,2.833-18-13.333-22.167c-29.544-7.615-9.667,43.833-20.167,43.833c-10.333,0,8.004-55.006-16.833-39
                            c-7.5,4.833-9.508-3.78-9.299-7.004c0.799-12.329,23.592-7.153,38.132-7.329c10.234-0.124,20.238-1.505,38.287-2.167
                            c16.642-0.61,32.903,1.125,46.213,1.5c12.438,0.351,35.058-5.579,31.863,6.451c-5.532,20.833,1.25,28.216-4.409,27.883
                            c-7.606-0.447-6.058-37.895-20.62-23.333c-10.167,10.166-15.972-0.747-25,12C119.547,443.568,121.798,416.515,111.547,415.233z
                                                  "/>
                            </path>
            <rect x="10" y="475.571" fill="#fefae9" width="180" height="4"/>
                        </svg>
        </div>

        <!--  最后显示的文字 -->
        <div id="div_dbcake_wish">
          <div class="div_dbcake_text">
            <h1>happy birthday!</h1>
            <p>送给可爱的小仙女，送你天天开心，越来越漂亮哦，要准时吃饭哦，多喝热水哈。</p>
          </div>
          <ul>
            <li v-on:click="dbcake_go_next">我喜欢</li>
            <li v-on:click="dbcake_show_note">不喜欢</li>
          </ul>
          <div id="div_wish_note" v-on:click="dbcake_hide_note">
            <img src="../assets/images/emoji_wulian.jpg" alt=""><br>
            不能不喜欢，哈哈
            <div id="div_wish_note_close">✖</div>
          </div>
        </div>

      </div>
    </div>

    <div class="div_pure_words"> <!-- 文字部分的最外层，用于定位 -->
      <div class="div_pure_words_bg"><!-- 背景设置在这里 -->

        <!-- 正文的内容复制到这里面，撑开整个文档的高度 -->
        <div class="div_pure_words_height">

        </div>
      </div>
      <div class="div_pw_typed"> <!-- 正文部分，绝对定位 -->
        <span id="span_pw_typed"/>

        <p class="pback">
          <a class="back" href="http://linkaiblog.top:8080/jacklin" style="display: none">Back</a>
        </p>


      </div>
    </div>

    <!--  音乐播放部分  -->
    <div id='div_btn_container'> <!-- 按钮部分的最外层，处于文档流之中 -->
      <div id="div_btn_inner"> <!-- 按钮部分内层，用于定位 -->

        <!--  正播放，已暂停按钮  JS控制显示和隐藏-->
        <div class='div_music_tips'></div>
        <div class="div_btn" id="div_music" v-on:click="music_switch()"> <!-- 音乐按钮部分 -->
          <img id='img_music' src='../assets/images/music.png'
               style='-webkit-animation:music_play_rotate 1s linear infinite' alt="">
          <!-- Chrome 浏览器更新之后，不再允许自动播放音频，视频 -->
          <audio id="audio_music" autoplay="autoplay" loop="loop">
            <!-- 播放音频 -->
            <source type="audio/mpeg" src="https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6861157645492243213.mp3"/>
            <!-- 您的浏览器不支持播放音乐 -->
          </audio>
        </div>


        <div class="div_record_tips"></div>
        <div class="div_btn" id="div_record" v-on:click="record_switch"> <!-- 录音按钮部分 -->
          语音
          <audio id="audio_record" autoplay="autoplay" loop="loop">
            <source type="audio/mpeg" src="http://m10.music.126.net/20210126213043/9f07a4d6a7f766275edcde4e3ba18dfc/ymusic/a9c1/47f7/e72a/eeca0e403e1aa21dc60ca590be3db3f0.mp3">
            <!-- 您的浏览器不支持播放音乐 -->
          </audio>
        </div>

      </div>
    </div>

  </div>

</template>


<script>

  export default {
    data () {
      return {
        msg: 'JackLin 的小作品',

        // 2. 第2部分用到的变量
        // 窗体的高度
        window_height: this.$(window).height(),
        // 主题
        theme: 'pure_words',
        // 最终需要展示的文字（ASCII）
        theme_content: {
          pure_words_content: '\u4eca\u5929\u662f\u4f60\u7684\u751f\u65e5\ud83c\udf82\r\n\r\n\u5c0f\u5c0f\u7684\u793c\u7269\r\n\r\n\u4ee3\u8868\u7740\u6211\u7684\u60c5\u8c0a\r\n\r\n\u613f\u4f60\u559c\u6b22\r\n\r\n\u518d\u9001\u4e0a\u6211\u6d53\u6d53\u7684\u795d\u798f\r\n\r\n\u613f\u751c\u751c\u871c\u871c\u5c5e\u4e8e\u4f60\u7684\u751f\u65e5\r\n\r\n\u5c5e\u4e8e\u4f60\u6240\u6709\u7684\u65e5\u5b50\r\n\r\n\u4f60\u53c8\u957f\u5927\u4e86\u4e00\u5c81\r\n\r\n\u8981\u66f4\u5e78\u798f\u54e6',
          typed_bool: 'typed_y',
          'cursor_char': 'cursor_heart',
          'bg_style_pure_words': 'bg_opacity',
          'bg_img': 'http://image.linkaiblog.top/image_248.png',
          'simple_page_content': '',
          'video_page_content': ''
        },
        music_json: {
          'music_select': 'm_online',
          'm_online_id': '1',
          'm_online_url': 'https://sf6-cdn-tos.douyinstatic.com/obj/ies-music/6861157645492243213.mp3',
          'm_upload_name': 'null',
          'm_upload_url': 'null'
        },
        record_json: {
          'record_bool': 'r_false',
          'r_wechat_time': 'null',
          'r_wechat_url': 'null',
          'r_wechat_amr': 'null'
        },
        signPackage: {
          'appid': 'wx47f716bdd7699533',
          'timestamp': 1586224114,
          'nonceStr': 'MTIwOgN2uePCrfed',
          'url': 'http:\/\/www.makusi.cn\/Home\/Play\/play_show\/ws\/YGdpmGpk',
          'signature': '25b0fdd38c2e3949cd038c7990ff9576864cb8fd',
          'rawString': 'jsapi_ticket=sM4AOVdWfPE4DxkXGEs8VHINcjHJVwMsFjJyfreRy7CV14waRxITvq43menDTy9W1e6Nqdwl5Jey_sJOmY0dYQ&noncestr=MTIwOgN2uePCrfed&timestamp=1586224114&url=http:\/\/www.makusi.cn\/Home\/Play\/play_show\/ws\/YGdpmGpk'
        },
        // 页面title
        main_title: '嘿，生日快乐哟！',

        // 最后要显示的文案
        // 今天是你的生日🎂 小小的礼物 代表着我的情谊 愿你喜欢 再送上我浓浓的祝福 愿甜甜蜜蜜属于你的生日 属于你所有的日子 你又长大了一岁 要更幸福哦
        pure_words_content: '\u4eca\u5929\u662f\u4f60\u7684\u751f\u65e5\ud83c\udf82\r\n\r\n\u5c0f\u5c0f\u7684\u793c\u7269\r\n\r\n\u4ee3\u8868\u7740\u6211\u7684\u60c5\u8c0a\r\n\r\n\u613f\u4f60\u559c\u6b22\r\n\r\n\u518d\u9001\u4e0a\u6211\u6d53\u6d53\u7684\u795d\u798f\r\n\r\n\u613f\u751c\u751c\u871c\u871c\u5c5e\u4e8e\u4f60\u7684\u751f\u65e5\r\n\r\n\u5c5e\u4e8e\u4f60\u6240\u6709\u7684\u65e5\u5b50\r\n\r\n\u4f60\u53c8\u957f\u5927\u4e86\u4e00\u5c81\r\n\r\n\u8981\u66f4\u5e78\u798f\u54e6',

        // 打字效果的光标
        str_cursorChar: '',

        // 最终文案展示时，是否显示打字效果
        typed_bool: true,


        interval_pw_height: null,
        height_div_pw: this.$('.div_pure_words_height').height(),

        // 3. 开头显示的文本输入框和答案
        // 祝今天的小可爱生日快乐哟 答案好的
        start_content: {
          // 祝今天的小可爱生日快乐哟 答案好的
          'dbcake_question': '\u795d\u4eca\u5929\u7684\u5c0f\u53ef\u7231\u751f\u65e5\u5feb\u4e50\u54df \u7b54\u6848\u597d\u7684',
          // 好的
          'dbcake_answer': '\u597d\u7684',
          'dbcake_title': '',
          'dbcake_wishes': '',
          'bg_style': 'bg_custom',
          'bg_img': 'http://image.linkaiblog.top/image_248.png',
          'img_src': ''
        }, //可能为null

        // 开始动画的 id
        start_id: 'birthdaycake',

        // 4.
        attachment: null,
        attached_content: { 'bool_save': false },

      }
    },
    created () {
      // 1.判断客户端设备，选择写入meta
      this.init_viewport()

      // 2. 设置标题    main.title == 嘿，生日快乐哟！
      if (this.main_title === '' || this.main_title === 'null') {  //允许标题为空
        document.title = '慢慢喜欢你'
      }

      // 触发互动    start_id == birthdaycake
      // 开头没有动画要展示，所以这里可以注释掉
      this.init_start(this.start_id)
    },
    methods: {

      // 1. 判断客户端设备，选择写入meta
      init_viewport () {
        var phoneScale
        if (navigator.userAgent.indexOf('Android') !== -1) {
          var version = parseFloat(RegExp.$1)
          if (version > 2.3) {
            var width = window.outerWidth === 0 ? window.screen.width : window.outerWidth
            phoneScale = parseInt(width) / 500
            document.write('<meta name="viewport" content="width=500, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">')
          } else {
            document.write('<meta name="viewport" content="width=500, target-densitydpi=device-dpi, user-scalable=0">')
          }
          console.log('Android')
        } else if (navigator.userAgent.indexOf('iPhone') !== -1) {
          phoneScale = parseInt(window.screen.width) / 500
          document.write('<meta name="viewport" content="width=500, min-height=750, initial-scale=' + phoneScale + ', maximum-scale=' + phoneScale + ', user-scalable=0" /> ')         //0.75   0.82
          console.log('iPhone')
        } else {
          document.write('<meta name="viewport" content="width=500, height=750, initial-scale=0.64" /> ') //0.75  0.82
          console.log('PC')
        }
      },

      // 2. 监听第一个文本框的输入 （“祝今天的小可爱生日快乐哟！ 答案好的  ”）
      show_dbcake_btn () {
        if (typeof (this.start_content.dbcake_answer) == 'undefined' || this.start_content.dbcake_answer === '') {
          if (this.$('#input_award').val().length > 0) {
            console.log('he is typing words')
            this.$('#input_award_btn').show()
          } else {
            this.$('#input_award_btn').hide()
          }
        } else {
          // 不为空
          // 如果输入的内容 == dbcake_answer（好的），则显示 “点击这里打开惊喜” 按钮
          if (this.$('#input_award').val() === this.start_content.dbcake_answer) {
            console.log('he is typing words')
            this.$('#input_award_btn').show()
          } else {
            this.$('#input_award_btn').hide()
          }
        }
      },

      // 3. 点击 “点击这里打开惊喜” 按钮，显示蛋糕动画
      show_dbcake () {
        console.log('show_cake')

        // 3.1 文字输入框隐藏
        this.$('#div_dbacke_access').remove()

        // 3.2 显示蛋糕动画
        this.$('#div_dbcake_cake').fadeIn(1500, 'swing')

        var _this = this

        setTimeout(function () {
          document.getElementsByTagName('animate')[4].beginElement()
        }, 1000)

        // 3.3 显示 “喜欢” 和 “不喜欢” 2个按钮
        setTimeout(function () {
          _this.$('#div_dbcake_wish').fadeIn(1000, 'swing')
        }, 6000)
      },

      // 4.1 点击 “不喜欢”  弹出提示框
      dbcake_show_note () {
        this.$('#div_wish_note').fadeIn(100, 'swing')
      },

      // 4.2 点击不喜欢之后，再次点击 “提示框” 的关闭按钮
      dbcake_hide_note () {
        this.$('#div_wish_note').hide()
      },

      // 4.2 点击 “我喜欢” 进入下一个页面
      dbcake_go_next () {
        console.log('dbcake_go_next now')

        this.init_theme()

        // 隐藏蛋糕
        this.$('#div_dbcake').fadeOut()
        var _this = this

        // 移除蛋糕
        setTimeout(function () {
          _this.$('#div_dbcake').remove()
        }, 1000)
      },

      // 5. 初始化主题
      init_theme () {
        console.log('init_theme')

        // 5.1 片头灰色的背景隐藏
        this.$('#div_start_bg').fadeOut()

        // 5.2 初始化文字
        this.init_pure_words()
      },

      // 6. 初始化最后的文字，背景图片，打字效果，窗体高度
      init_pure_words () {

        this.$('.div_pure_words_height').html(this.pure_words_content + '22222' + "\n" + "\n" + "\n" + "\n" + "\n" + "\n")  //初始化复制内容，撑开文档高度

        // 初始化设置div的bg图片 初始化设置div的bg图片
        if (typeof (this.theme_content.bg_style_pure_words) != 'undefined' && this.theme_content.bg_style_pure_words === 'bg_opacity') {
          if (typeof (this.theme_content.bg_img) != 'undefined' && this.theme_content.bg_img !== '') {
            console.log('background!!!')
            this.$('.div_pure_words_bg').css({ 'background-image': 'url(' + this.theme_content.bg_img + ')' })
          }
        }

        //以下是打字效果的js
        if (typeof (this.theme_content.cursor_char) != 'undefined' && this.theme_content.cursor_char !== '') {
          switch (this.theme_content.cursor_char) { //设置打字光标的样式
            case 'cursor_heart':
              this.str_cursorChar = '❤'
              break
            case 'cursor_sub':
              this.str_cursorChar = '_'
              break
            case 'cursor_music':
              this.str_cursorChar = '♫'
              break
            case 'cursor_star':
              this.str_cursorChar = '★'
              break
            case 'cursor_sun':
              this.str_cursorChar = '☀'
              break
            default:
              this.str_cursorChar = '|'
          }
        } else { //处理全新作品，默认显示打字效果
          this.str_cursorChar = '❤'
        }

        // 6.2 显示打字效果
        this.display_pure_words()

        this.$('.div_pure_words').fadeIn()

        var _this = this
        this.interval_pw_height = setInterval(function () {
          // console.log('div_pure_words_height -> ' + this.$('.div_pure_words_height').height())
          var least_height_div_pw = _this.$('.div_pure_words_height').height()
          if (least_height_div_pw > _this.height_div_pw) {
            _this.height_div_pw = least_height_div_pw
          } else {
            clearInterval(interval_pw_height)
            _this.$('.div_pure_words_height').height(least_height_div_pw + 100)
            if (_this.$('.div_pure_words_height').height() < _this.window_height) {
              _this.$('.div_pure_words_height').height(_this.window_height) //不能小于窗口的高度
              console.log('let us be high as window')
            }
          }
        }, 100)


      },

      // 7. 显示打字动画，设置打字速度，样式
      display_pure_words () {
        if (this.typed_bool) {
          // new this.typed
          var typed_pure_words = new this.typed('#span_pw_typed', {
            strings: [this.pure_words_content], //输入内容, 支持html标签
            typeSpeed: 120, //打字速度
            cursorChar: this.str_cursorChar,//替换光标的样式
            contentType: 'html', //值为html时，将打印的文本标签直接解析html标签

            onComplete: function (abc) {
              // console.log(abc);
              console.log('finished typing words')
              // console.log($('#span_pw_typed').height()-$(".div_pure_words_height").height());
              // this.$(".back").css("display", "block")
              document.getElementsByClassName("back")[0].setAttribute('style', 'display: block')
            },
          })
        } else {
          //如果不需要打字效果就直接显示
          this.$('#span_pw_typed').html(this.pure_words_content).fadeIn()
        }
        // this.init_attachment()
      },


      // 6. 音乐部分
      music_switch () { //切换
        var img_music = document.getElementById('img_music')
        var audio_music = document.getElementById('audio_music')
        var audio_record = document.getElementById('audio_record')

        var timeout_music

        clearTimeout(timeout_music)

        var that = this
        if (audio_music.paused) {
          console.log('switch music to play')
          audio_music.play()
          audio_record.pause() //播放音乐时录音一定暂停
          img_music.style.webkitAnimation = 'music_play_rotate 1s linear infinite'
          this.$('.div_music_tips').html('正播放').show()

          timeout_music = setTimeout(function () {
            that.$('.div_music_tips').hide()
          }, 2500)
        } else {
          console.log('switch music to paused')
          audio_music.pause()
          // audio_record.play(); //
          img_music.style.webkitAnimation = ''
          this.$('.div_music_tips').html('已暂停').show()
          timeout_music = setTimeout(function () {
            that.$('.div_music_tips').hide()
          }, 2500)
        }
      },

      record_switch () { //切换
        console.log("8888")
        var img_music = document.getElementById('img_music')
        var audio_music = document.getElementById('audio_music')
        var audio_record = document.getElementById('audio_record')

        var timeout_record
        var div_record = document.getElementById('div_record')

        clearTimeout(timeout_record)
        var that = this
        if (audio_record.paused) {
          console.log('switch record to play')
          audio_record.play()
          audio_music.pause() //
          img_music.style.webkitAnimation = ''
          div_record.style.webkitAnimation = 'btn_rotate 1s linear infinite'
          this.$('.div_record_tips').html('正播放').show()
          timeout_record = setTimeout(function () {
            that.$('.div_record_tips').hide()
          }, 2500)
        } else {
          console.log('switch record to pause')
          audio_record.pause() //播放音乐时录音一定暂停
          audio_music.play()
          img_music.style.webkitAnimation = 'music_play_rotate 1s linear infinite'
          div_record.style.webkitAnimation = ''
          this.$('.div_record_tips').html('已暂停').show()
          timeout_record = setTimeout(function () {
            that.$('.div_record_tips').hide()
          }, 2500)
        }
      },


      /*  -------------------------------------------下面这部分函数是没有被用到的    */

      // 2. 开始动画
      init_start (start_id) {
        // start_id == birthdaycake
        console.log('init_start ->' + this.start_id)

        // 只有 init_birthdaycake() 方法实现了
        switch (this.start_id) {
          case 'loveformat':
            this.$('.div_loveformat').show()
            this.init_loveformat()
            break
          case 'hearttree':
            this.$('#div_hearttree').show()
            this.init_hearttree()
            break
          case 'courage':
            this.$('#div_courage').show()
            this.init_courage()
            break
          case 'birthdaycake':
            this.$('#div_dbcake').show()
            this.init_birthdaycake()
            break
          case 'intersect':
            this.$('#div_intersect').show()
            this.init_intersect()
            break
          case 'onlyyou':
            this.$('#div_onlyyou').show()
            this.init_onlyyou()
            break
          default:
            this.init_theme()
        }
      },

      // 随机文案
      random_text_array (temp_array, length) {  //获取随机的模板文字
        console.log('random_text_array')
        var random_array = []
        while (random_array.length < length) {
          // var random_num=Math.floor(Math.random()*(array_as_pics.length-0))+0;
          var random_num = Math.floor(Math.random() * (array_as_words_love.length)) //随机取值
          if (random_array.indexOf(random_num) == -1) {
            random_array.push(random_num)
          }
        }
        // console.log(random_array);
        for (var i = 0; i < length; i++) {
          temp_array.push(array_as_words_love[random_array[i]]) //获取随机的模板文字
        }
      },

      // 4. Start Birthday Cake 系列函数
      init_birthdaycake () {
        // 初始化高度并设置背景bg
        this.$('#div_dbcake').height(this.$(window).height())
        this.$('#div_dbcake_inner').height(this.$(window).height())
        var start_bg_img = this.start_content.bg_img
        if (typeof (this.start_content.bg_style) != 'undefined' && this.start_content.bg_style === 'bg_custom') {
          if (typeof (start_bg_img) != 'undefined' && start_bg_img !== '') {
            this.$('#div_dbcake').css({ 'background-image': 'url(' + start_bg_img + ')' })
            this.$('#div_dbcake_inner').css({ 'background': 'rgba(130,130,130,.8)' })
          }
        }

        console.log('***')
        console.log(this.start_content.dbcake_question)

        if (typeof (this.start_content.dbcake_question) != 'undefined' && this.start_content.dbcake_question !== '') {
          console.log('好的~')
          this.$('#input_award').attr('placeholder', this.start_content.dbcake_question) //加载自定义内宿
        } else {
          this.$('#input_award').attr('placeholder', '今天过生日的小可爱叫什么名字') //设置默认倿
        }

        if (typeof (this.start_content.dbcake_title) != 'undefined' && this.start_content.dbcake_title !== '') {
          this.$('.div_dbcake_text h1').html(this.start_content.dbcake_title) //加载自定义内宿
        } else {
          this.$('.div_dbcake_text h1').html('Happy Birthday!') //设置默认倿
        }

        if (typeof (this.start_content.dbcake_wishes) != 'undefined' && this.start_content.dbcake_wishes !== '') {
          this.$('.div_dbcake_text p').html(this.start_content.dbcake_wishes) //加载自定义内宿
        } else {
          this.$('.div_dbcake_text p').html('又长大一岁啦，祝你开心快乐每一天，运气爆表，活出自己想要的样子') //设置默认倿
        }
      },
    }
  }

</script>

<style scoped>

  /*  导入外部 css 文件 */
  @import "../assets/css/start_birthdaycake.css";
  @import "../assets/css/theme_public_btn.css";

  * {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
  }

  body {
    background-color: #ff3abf;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

  #div_container { /*最外层div，用于居中兼容PC和移动*/
    width: 500px;
    margin: 0 auto;
    position: relative;
    /*background-color: #FAFAFA;*/
    font-size: 1em;
  }

  #div_dbcake {
    /*background: url("/public/images/background.png") repeat;*/
    /*background: url("http://image.linkaiblog.top/image_248.png") repeat;*/
  }


  .div_pure_words { /*文字部分的最外层，用于定位*/
    position: relative;
    display: none;
  }

  .div_pure_words_bg { /*背景设置在这里*/
    background-size: 100%;
    background-attachment: fixed;
    width: 500px;
    min-height: 500px;
  }

  .div_pure_words_height {
    visibility: hidden;
    padding: 30px;
    text-align: justify; /*为了使文字两端对齐 */
    white-space: pre-wrap; /*保留换行效果*/
    font-size: 1.1em;
    font-family: "Microsoft YaHei", "Arial";
    color: white;
  }

  .div_pw_typed {
    position: absolute;
    left: 0;
    right: 0; /*4个方向定位使div充满整个画画*/
    top: 0;
    bottom: 0; /*4个方向定位使div充满整个画画*/
    width: 500px;
    background: rgba(255, 255, 255, 0.8); /*半透明效果*/
    padding: 30px;
    text-align: justify; /*为了使文字两端对齐 */
  }

  #span_pw_typed {
    width: 100%; /*为了使文字两端对齐 */
    white-space: pre-wrap; /*保留换行效果*/
    font-size: 1.1em;
    font-family: "Microsoft YaHei", "Arial";
  }


  #div_start_bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 44;
    background-color: white;
  }

  #div_dbcake_inner {
    height: 1200px;
    background: rgba(130, 130, 130, 0.8);
  }

  .div_pure_words_height {
    height: 1200px;
  }

  #div_dbcake {
    display: block;
    height: 1200px !important;
    background-image: url(http://image.linkaiblog.top/image_248.png);
  }

  .div_pw_typed {
    font-size: 22px
  }

  .div_pure_words_bg {
    opacity: 0.5;
  }

  .pback {
    text-align: center;
    margin-top: 35px;
  }

  .back {
    font-size: 32px;
    color: #ff7d0f;
    font-weight: 800;
    background-color: #ffe6d6;
    padding: 10px;
    /* font-style: oblique; */
    border-radius: 7px;
    border: 1px solid #ccc;
  }

</style>
