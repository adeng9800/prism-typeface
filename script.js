/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var mouseX = 0,
  mouseY = 0;

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

$(document).ready(function() {
  const anime = window.anime;

  $(document).on("mousemove", function(map) {
    $("#cursor").css({
      visibility: "visible",
      top: map.pageY + "px",
      left: map.pageX + "px"
    });
    mouseX = map.pageX;
    mouseY = map.pageY;
  });

  $("html").mousemove(function(map) {
    mouseX = map.pageX;
    mouseY = map.pageY;
  });

  // A
  var animation_a_one = null;
  var animation_a_two = null;
  var animation_a_one_return = null;
  var animation_a_two_return = null;
  $("#a").mouseenter(function() {
    if (animation_a_one != null) animation_a_one.pause();
    if (animation_a_two != null) animation_a_two.pause();
    if (animation_a_one_return != null) animation_a_one_return.pause();
    if (animation_a_two_return != null) animation_a_two_return.pause();
    anime.set("#a .triangle:nth-of-type(1)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#a .triangle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    animation_a_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_a_one
      .add({
        targets: "#a .triangle:nth-of-type(1)",
        rotate: 0 + 360
      })
      .add({
        targets: "#a .triangle:nth-of-type(1)",
        rotate: 0
      });

    animation_a_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_a_two
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "-100%",
        translateY: "-100%"
      })
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "-100%",
        translateY: "0%"
      })
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "-50%",
        translateY: "-100%"
      })
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "0%",
        translateY: "0%"
      })
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "0%",
        translateY: "-100%"
      })
      .add({
        targets: "#a .triangle:nth-of-type(2)",
        translateX: "-50%",
        translateY: "0%"
      });
  });

  $("#a").mouseleave(function() {
    if (animation_a_one != null) animation_a_one.pause();
    if (animation_a_two != null) animation_a_two.pause();
    if (animation_a_one_return != null) animation_a_one_return.pause();
    if (animation_a_two_return != null) animation_a_two_return.pause();
    animation_a_one_return = anime({
      targets: "#a .triangle:nth-of-type(1)",
      translateX: "-50%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });

    animation_a_two_return = anime({
      targets: "#a .triangle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });
  });

  // B
  var animation_b_one = null;
  var animation_b_two = null;
  var animation_b_one_return = null;
  var animation_b_two_return = null;
  $("#b").mouseenter(function() {
    if (animation_b_one != null) animation_b_one.pause();
    if (animation_b_two != null) animation_b_two.pause();
    if (animation_b_one_return != null) animation_b_one_return.pause();
    if (animation_b_two_return != null) animation_b_two_return.pause();
    anime.set("#b .small-semi-circle", {
      translateX: "-120%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#b .semi-circle", {
      translateX: "-40%",
      translateY: "0%",
      rotate: 0
    });

    animation_b_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_b_one
      .add({
        targets: "#b .small-semi-circle",
        translateX: "-120%",
        translateY: "280%"
      })
      .add({
        targets: "#b .small-semi-circle",
        translateX: "-120%",
        translateY: "0%"
      });

    animation_b_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_b_two
      .add({
        targets: "#b .semi-circle",
        translateX: "30%",
        translateY: "0%"
      })
      .add({
        targets: "#b .semi-circle",
        translateX: "-130%",
        translateY: "0%"
      })
      .add({
        targets: "#b .semi-circle",
        translateX: "-40%",
        translateY: "0%"
      });
  });

  $("#b").mouseleave(function() {
    if (animation_b_one != null) animation_b_one.pause();
    if (animation_b_two != null) animation_b_two.pause();
    if (animation_b_one_return != null) animation_b_one_return.pause();
    if (animation_b_two_return != null) animation_b_two_return.pause();
    animation_b_one_return = anime({
      targets: "#b .small-semi-circle",
      translateX: "-120%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });

    animation_b_two_return = anime({
      targets: "#b .semi-circle",
      translateX: "-40%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });
  });

  // C
  var animation_c_one = null;
  var animation_c_two = null;
  var animation_c_one_return = null;
  var animation_c_two_return = null;
  $("#c").mouseenter(function() {
    if (animation_c_one != null) animation_c_one.pause();
    if (animation_c_two != null) animation_c_two.pause();
    if (animation_c_one_return != null) animation_c_one_return.pause();
    if (animation_c_two_return != null) animation_c_two_return.pause();
    anime.set("#c .semi-circle:nth-of-type(1)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 135
    });

    anime.set("#c .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 45
    });

    animation_c_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 1000,
      loop: true
    });

    animation_c_one
      .add({
        targets: "#c .semi-circle:nth-of-type(1)",
        rotate: 135 + 180
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(1)",
        rotate: 315 + 180
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(1)",
        rotate: 495 + 90
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(1)",
        rotate: 495 - 90
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(1)",
        rotate: 315 - 180
      });

    animation_c_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 1000,
      loop: true
    });

    animation_c_two
      .add({
        targets: "#c .semi-circle:nth-of-type(2)",
        rotate: 45 - 180
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(2)",
        rotate: -135 - 180
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(2)",
        rotate: -315 - 90
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(2)",
        rotate: -315 + 90
      })
      .add({
        targets: "#c .semi-circle:nth-of-type(2)",
        rotate: -135 + 180
      });
  });

  $("#c").mouseleave(function() {
    if (animation_c_one != null) animation_c_one.pause();
    if (animation_c_two != null) animation_c_two.pause();
    if (animation_c_one_return != null) animation_c_one_return.pause();
    if (animation_c_two_return != null) animation_c_two_return.pause();
    animation_c_one_return = anime({
      targets: "#c .semi-circle:nth-of-type(1)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 135
    });

    animation_c_two_return = anime({
      targets: "#c .semi-circle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 45
    });
  });

  // D
  var animation_d_one = null;
  var animation_d_two = null;
  var animation_d_one_return = null;
  var animation_d_two_return = null;
  $("#d").mouseenter(function() {
    if (animation_d_one != null) animation_d_one.pause();
    if (animation_d_two != null) animation_d_two.pause();
    if (animation_d_one_return != null) animation_d_one_return.pause();
    if (animation_d_two_return != null) animation_d_two_return.pause();
    anime.set("#d .rectangle", {
      translateX: "40%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#d .semi-circle", {
      translateX: "-15%",
      translateY: "0%",
      rotate: 0
    });

    animation_d_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_d_one
      .add({
        targets: "#d .rectangle",
        translateX: "200%",
        translateY: "0%",
        rotate: 0
      })
      .add({
        targets: "#d .rectangle",
        translateX: "0%",
        rotate: 360
      })
      .add({
        targets: "#d .rectangle",
        translateX: "40%",
        translateY: "0%",
        rotate: 0
      });

    animation_d_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_d_two
      .add({
        targets: "#d .semi-circle",
        translateX: "-100%",
        translateY: "0%"
      })
      .add({
        targets: "#d .semi-circle",
        translateX: "0%",
        translateY: "0%"
      })
      .add({
        targets: "#d .semi-circle",
        translateX: "-15%",
        translateY: "0%"
      });
  });

  $("#d").mouseleave(function() {
    if (animation_d_one != null) animation_d_one.pause();
    if (animation_d_two != null) animation_d_two.pause();
    if (animation_d_one_return != null) animation_d_one_return.pause();
    if (animation_d_two_return != null) animation_d_two_return.pause();
    animation_d_one_return = anime({
      targets: "#d .rectangle",
      translateX: "40%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });

    animation_d_two_return = anime({
      targets: "#d .semi-circle",
      translateX: "-15%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // E
  var animation_e_one = null;
  var animation_e_two = null;
  var animation_e_one_return = null;
  var animation_e_two_return = null;
  $("#e").mouseenter(function() {
    if (animation_e_one != null) animation_e_one.pause();
    if (animation_e_two != null) animation_e_two.pause();
    if (animation_e_one_return != null) animation_e_one_return.pause();
    if (animation_e_two_return != null) animation_e_two_return.pause();
    anime.set("#e .semi-circle:nth-of-type(1)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 180
    });

    anime.set("#e .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 90
    });

    animation_e_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_e_one
      .add({
        targets: "#e .semi-circle:nth-of-type(1)",
        translateY: "100%"
      })
      .add({
        targets: "#e .semi-circle:nth-of-type(1)",
        translateY: "0%",
        rotate: 180 + 180
      })
      .add({
        targets: "#e .semi-circle:nth-of-type(1)",
        translateY: "0%",
        rotate: 360 + 180
      });

    animation_e_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_e_two
      .add({
        targets: "#e .semi-circle:nth-of-type(2)",
        translateX: "0%"
      })
      .add({
        targets: "#e .semi-circle:nth-of-type(2)",
        translateX: "-50%",
        rotate: 90 + 180
      })
      .add({
        targets: "#e .semi-circle:nth-of-type(2)",
        translateX: "-50%",
        rotate: 270 + 180
      });
  });

  $("#e").mouseleave(function() {
    if (animation_e_one != null) animation_e_one.pause();
    if (animation_e_two != null) animation_e_two.pause();
    if (animation_e_one_return != null) animation_e_one_return.pause();
    if (animation_e_two_return != null) animation_e_two_return.pause();
    animation_e_one_return = anime({
      targets: "#e .semi-circle:nth-of-type(1)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 180
    });

    animation_e_two_return = anime({
      targets: "#e .semi-circle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 90
    });
  });

  // F
  var animation_f_one = null;
  var animation_f_two = null;
  var animation_f_one_return = null;
  var animation_f_two_return = null;
  $("#f").mouseenter(function() {
    if (animation_f_one != null) animation_f_one.pause();
    if (animation_f_two != null) animation_f_two.pause();
    if (animation_f_one_return != null) animation_f_one_return.pause();
    if (animation_f_two_return != null) animation_f_two_return.pause();
    anime.set("#f .right-triangle:nth-of-type(1)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#f .right-triangle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    animation_f_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_f_one
      .add({
        targets: "#f .right-triangle:nth-of-type(1)",
        translateX: "-75%",
        rotate: -90
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(1)",
        translateY: "12%"
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(1)",
        translateX: "-50%"
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(1)",
        translateY: "0%",
        rotate: -90 - 270
      });

    animation_f_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_f_two
      .add({
        targets: "#f .right-triangle:nth-of-type(2)",
        translateX: "-25%",
        rotate: 90
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(2)",
        translateY: "-12%"
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(2)",
        translateX: "-50%"
      })
      .add({
        targets: "#f .right-triangle:nth-of-type(2)",
        translateY: "0%",
        rotate: 90 + 270
      });
  });

  $("#f").mouseleave(function() {
    if (animation_f_one != null) animation_f_one.pause();
    if (animation_f_two != null) animation_f_two.pause();
    if (animation_f_one_return != null) animation_f_one_return.pause();
    if (animation_f_two_return != null) animation_f_two_return.pause();
    animation_f_one_return = anime({
      targets: "#f .right-triangle:nth-of-type(1)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });

    animation_f_two_return = anime({
      targets: "#f .right-triangle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // G
  var animation_g_one = null;
  var animation_g_two = null;
  var animation_g_one_return = null;
  var animation_g_two_return = null;
  $("#g").mouseenter(function() {
    if (animation_g_one != null) animation_g_one.pause();
    if (animation_g_two != null) animation_g_two.pause();
    if (animation_g_one_return != null) animation_g_one_return.pause();
    if (animation_g_two_return != null) animation_g_two_return.pause();
    anime.set("#g .semi-circle:nth-of-type(1)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 90
    });

    anime.set("#g .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    animation_g_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_g_one
      .add({
        targets: "#g .semi-circle:nth-of-type(1)",
        translateY: "0%",
        rotate: 90 + 180
      })
      .add({
        targets: "#g .semi-circle:nth-of-type(1)",
        translateX: "-50%",
        rotate: 270 + 180
      });

    animation_g_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_g_two
      .add({
        targets: "#g .semi-circle:nth-of-type(2)",
        translateX: "-50%",
        rotate: 0 - 180
      })
      .add({
        targets: "#g .semi-circle:nth-of-type(2)",
        translateX: "-50%",
        rotate: -180 - 180
      });
  });

  $("#g").mouseleave(function() {
    if (animation_g_one != null) animation_g_one.pause();
    if (animation_g_two != null) animation_g_two.pause();
    if (animation_g_one_return != null) animation_g_one_return.pause();
    if (animation_g_two_return != null) animation_g_two_return.pause();
    animation_g_one_return = anime({
      targets: "#g .semi-circle:nth-of-type(1)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 90
    });

    animation_g_two_return = anime({
      targets: "#g .semi-circle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // H
  var animation_h_one = null;
  var animation_h_two = null;
  var animation_h_three = null;
  var animation_h_one_return = null;
  var animation_h_two_return = null;
  var animation_h_three_return = null;
  $("#h").mouseenter(function() {
    if (animation_h_one != null) animation_h_one.pause();
    if (animation_h_two != null) animation_h_two.pause();
    if (animation_h_three != null) animation_h_three.pause();
    if (animation_h_one_return != null) animation_h_one_return.pause();
    if (animation_h_two_return != null) animation_h_two_return.pause();
    if (animation_h_three_return != null) animation_h_three_return.pause();
    anime.set("#h .rectangle:nth-of-type(1)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#h .small-circle:nth-of-type(2)", {
      translateX: "-50%",
      translateY: "-50%",
      rotate: 0
    });

    anime.set("#h .rectangle:nth-of-type(3)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_h_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_h_one
      .add({
        targets: "#h .rectangle:nth-of-type(1)",
        translateY: "0%",
        scaleY: 0.35
      })
      .add({
        targets: "#h .rectangle:nth-of-type(1)",
        translateY: "65%"
      })
      .add({
        targets: "#h .rectangle:nth-of-type(1)",
        translateY: "0%",
        scaleY: 1
      });

    animation_h_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_h_two
      .add({
        targets: "#h .small-circle:nth-of-type(2)",
        translateX: "-50%",
        translateY: "-50%"
      })
      .add({
        targets: "#h .small-circle:nth-of-type(2)",
        translateX: "0%"
      })
      .add({
        targets: "#h .small-circle:nth-of-type(2)",
        translateX: "-50%",
        translateY: "-50%"
      })
      .add({
        targets: "#h .small-circle:nth-of-type(2)",
        translateX: "-100%"
      })
      .add({
        targets: "#h .small-circle:nth-of-type(2)",
        translateX: "-50%",
        translateY: "-50%"
      });

    animation_h_three = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_h_three
      .add({
        targets: "#h .rectangle:nth-of-type(3)",
        translateY: "65%",
        scaleY: 0.35
      })
      .add({
        targets: "#h .rectangle:nth-of-type(3)",
        translateY: "0%"
      })
      .add({
        targets: "#h .rectangle:nth-of-type(3)",
        translateY: "0%",
        scaleY: 1
      });
  });

  $("#h").mouseleave(function() {
    if (animation_h_one != null) animation_h_one.pause();
    if (animation_h_two != null) animation_h_two.pause();
    if (animation_h_three != null) animation_h_three.pause();
    if (animation_h_one_return != null) animation_h_one_return.pause();
    if (animation_h_two_return != null) animation_h_two_return.pause();
    if (animation_h_three_return != null) animation_h_three_return.pause();
    animation_h_one_return = anime({
      targets: "#h .rectangle:nth-of-type(1)",
      translateX: "0%",
      translateY: "0%",
      scaleY: 1,
      rotate: 0
    });

    animation_h_two_return = anime({
      targets: "#h .small-circle:nth-of-type(2)",
      translateX: "-50%",
      translateY: "-50%",
      borderRadius: "50%",
      scale: 1,
      rotate: 0
    });

    animation_h_three_return = anime({
      targets: "#h .rectangle:nth-of-type(3)",
      translateX: "0%",
      translateY: "0%",
      scaleY: 1,
      rotate: 0
    });
  });

  // I
  var animation_i_one = null;
  var animation_i_two = null;
  var animation_i_one_return = null;
  var animation_i_two_return = null;
  $("#i").mouseenter(function() {
    if (animation_i_one != null) animation_i_one.pause();
    if (animation_i_two != null) animation_i_two.pause();
    if (animation_i_one_return != null) animation_i_one_return.pause();
    if (animation_i_two_return != null) animation_i_two_return.pause();
    anime.set("#i .rectangle:nth-of-type(1)", {
      translateX: "-50%",
      rotate: 0
    });

    anime.set("#i .rectangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: 0
    });

    animation_i_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_i_one
      .add({
        targets: "#i .rectangle:nth-of-type(1)",
        translateX: "-200%"
      })
      .add({
        targets: "#i .rectangle:nth-of-type(1)",
        scaleY: 0.3,
        rotate: 90,
        borderRadius: "50%"
      })
      .add({
        targets: "#i .rectangle:nth-of-type(1)",
        translateX: "-50%",
        rotate: 180,
        scaleY: 1,
        borderRadius: "0%"
      });

    animation_i_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_i_two
      .add({
        targets: "#i .rectangle:nth-of-type(2)",
        translateX: "100%"
      })
      .add({
        targets: "#i .rectangle:nth-of-type(2)",
        scaleY: 0.3,
        rotate: -90,
        borderRadius: "50%"
      })
      .add({
        targets: "#i .rectangle:nth-of-type(2)",
        translateX: "-50%",
        rotate: -180,
        scaleY: 1,
        borderRadius: "0%"
      });
  });

  $("#i").mouseleave(function() {
    if (animation_i_one != null) animation_i_one.pause();
    if (animation_i_two != null) animation_i_two.pause();
    if (animation_i_one_return != null) animation_i_one_return.pause();
    if (animation_i_two_return != null) animation_i_two_return.pause();
    animation_i_one_return = anime({
      targets: "#i .rectangle:nth-of-type(1)",
      translateX: "-50%",
      scaleY: 1,
      rotate: 0,
      borderRadius: "0%",
      duration: 1500
    });

    animation_i_two_return = anime({
      targets: "#i .rectangle:nth-of-type(2)",
      translateX: "-50%",
      scaleY: 1,
      rotate: 0,
      borderRadius: "0%",
      duration: 1500
    });
  });

  // J
  var animation_j_one = null;
  var animation_j_two = null;
  var animation_j_one_return = null;
  var animation_j_two_return = null;
  $("#j").mouseenter(function() {
    if (animation_j_one != null) animation_j_one.pause();
    if (animation_j_two != null) animation_j_two.pause();
    if (animation_j_one_return != null) animation_j_one_return.pause();
    if (animation_j_two_return != null) animation_j_two_return.pause();
    anime.set("#j .semi-circle", {
      translateX: "-50%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#j .rectangle", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_j_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_j_one
      .add({
        targets: "#j .semi-circle",
        rotate: 0 + 180
      })
      .add({
        targets: "#j .semi-circle",
        rotate: 180 + 180
      });

    animation_j_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_j_two
      .add({
        targets: "#j .rectangle",
        translateX: "-200%"
      })
      .add({
        targets: "#j .rectangle",
        translateX: "0%"
      });
  });

  $("#j").mouseleave(function() {
    if (animation_j_one != null) animation_j_one.pause();
    if (animation_j_two != null) animation_j_two.pause();
    if (animation_j_one_return != null) animation_j_one_return.pause();
    if (animation_j_two_return != null) animation_j_two_return.pause();
    animation_j_one_return = anime({
      targets: "#j .semi-circle",
      translateX: "-50%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });

    animation_j_two_return = anime({
      targets: "#j .rectangle",
      translateX: "0%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // K
  var animation_k_one = null;
  var animation_k_two = null;
  var animation_k_one_return = null;
  var animation_k_two_return = null;
  $("#k").mouseenter(function() {
    if (animation_k_one != null) animation_k_one.pause();
    if (animation_k_two != null) animation_k_two.pause();
    if (animation_k_one_return != null) animation_k_one_return.pause();
    if (animation_k_two_return != null) animation_k_two_return.pause();
    anime.set("#k .right-triangle:nth-of-type(1)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#k .right-triangle:nth-of-type(2)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_k_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_k_one
      .add({
        targets: "#k .right-triangle:nth-of-type(1)",
        rotate: -90
      })
      .add({
        targets: "#k .right-triangle:nth-of-type(1)",
        rotate: -90 - 90
      })
      .add({
        targets: "#k .right-triangle:nth-of-type(1)",
        rotate: -180 - 90
      })
      .add({
        targets: "#k .right-triangle:nth-of-type(1)",
        rotate: -270 - 90
      });

    animation_k_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_k_two
      .add({
        targets: "#k .right-triangle:nth-of-type(2)",
        rotate: 90
      })
      .add({
        targets: "#k .right-triangle:nth-of-type(2)",
        rotate: 90 + 180
      })
      .add({
        targets: "#k .right-triangle:nth-of-type(2)",
        rotate: 270 + 90
      });
  });

  $("#k").mouseleave(function() {
    if (animation_k_one != null) animation_k_one.pause();
    if (animation_k_two != null) animation_k_two.pause();
    if (animation_k_one_return != null) animation_k_one_return.pause();
    if (animation_k_two_return != null) animation_k_two_return.pause();
    animation_k_one_return = anime({
      targets: "#k .right-triangle:nth-of-type(1)",
      translateX: "0%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });

    animation_k_two_return = anime({
      targets: "#k .right-triangle:nth-of-type(2)",
      translateX: "0%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // L
  var animation_l_one = null;
  var animation_l_two = null;
  var animation_l_one_return = null;
  var animation_l_two_return = null;
  $("#l").mouseenter(function() {
    if (animation_l_one != null) animation_l_one.pause();
    if (animation_l_two != null) animation_l_two.pause();
    if (animation_l_one_return != null) animation_l_one_return.pause();
    if (animation_l_two_return != null) animation_l_two_return.pause();
    anime.set("#l .rectangle:nth-of-type(1)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#l .rectangle:nth-of-type(2)", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_l_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_l_one
      .add({
        targets: "#l .rectangle:nth-of-type(1)",
        translateY: "70%",
        scaleY: 0.3
      })
      .add({
        targets: "#l .rectangle:nth-of-type(1)",
        translateX: "200%",
        scaleY: 0.3
      })
      .add({
        targets: "#l .rectangle:nth-of-type(1)",
        translateX: "0%",
        translateY: "0%",
        scaleY: 1
      });

    animation_l_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_l_two
      .add({
        targets: "#l .rectangle:nth-of-type(2)",
        translateY: "0%",
        scaleX: 0.3
      })
      .add({
        targets: "#l .rectangle:nth-of-type(2)",
        translateY: "-200%",
        scaleX: 0.3
      })
      .add({
        targets: "#l .rectangle:nth-of-type(2)",
        translateY: "0%",
        scaleX: 1
      });
  });

  $("#l").mouseleave(function() {
    if (animation_l_one != null) animation_l_one.pause();
    if (animation_l_two != null) animation_l_two.pause();
    if (animation_l_one_return != null) animation_l_one_return.pause();
    if (animation_l_two_return != null) animation_l_two_return.pause();
    animation_l_one_return = anime({
      targets: "#l .rectangle:nth-of-type(1)",
      translateX: "0%",
      translateY: "0%",
      scaleY: 1,
      rotate: 0
    });

    animation_l_two_return = anime({
      targets: "#l .rectangle:nth-of-type(2)",
      translateX: "0%",
      translateY: "0%",
      scaleX: 1,
      rotate: 0
    });
  });

  // M
  var animation_m_one = null;
  var animation_m_two = null;
  var animation_m_one_return = null;
  var animation_m_two_return = null;
  $("#m").mouseenter(function() {
    if (animation_m_one != null) animation_m_one.pause();
    if (animation_m_two != null) animation_m_two.pause();
    if (animation_m_one_return != null) animation_m_one_return.pause();
    if (animation_m_two_return != null) animation_m_two_return.pause();
    anime.set("#m .triangle:nth-of-type(1)", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#m .triangle:nth-of-type(2)", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_m_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_m_one
      .add({
        targets: "#m .triangle:nth-of-type(1)",
        translateX: "-50%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(1)",
        translateX: "50%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(1)",
        translateX: "100%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(1)",
        translateX: "0%",
        rotate: 0
      });

    animation_m_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_m_two
      .add({
        targets: "#m .triangle:nth-of-type(2)",
        translateX: "50%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(2)",
        translateX: "-50%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(2)",
        translateX: "-100%",
        rotate: 0
      })
      .add({
        targets: "#m .triangle:nth-of-type(2)",
        translateX: "0%",
        rotate: 0
      });
  });

  $("#m").mouseleave(function() {
    if (animation_m_one != null) animation_m_one.pause();
    if (animation_m_two != null) animation_m_two.pause();
    if (animation_m_one_return != null) animation_m_one_return.pause();
    if (animation_m_two_return != null) animation_m_two_return.pause();
    animation_m_one_return = anime({
      targets: "#m .triangle:nth-of-type(1)",
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_m_two_return = anime({
      targets: "#m .triangle:nth-of-type(2)",
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });
  });

  // N
 var animation_n_one = null;
  var animation_n_two = null;
  var animation_n_one_return = null;
  var animation_n_two_return = null;
  $("#n").mouseenter(function() {
    if (animation_n_one != null) animation_n_one.pause();
    if (animation_n_two != null) animation_n_two.pause();
    if (animation_n_one_return != null) animation_n_one_return.pause();
    if (animation_n_two_return != null) animation_n_two_return.pause();
    anime.set("#n .rectangle", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    anime.set("#n .right-triangle", {
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_n_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_n_one
      .add({
        targets: "#n .rectangle",
        translateX: "200%"
      })
      .add({
        targets: "#n .rectangle",
        translateX: "0%"
      });

    animation_n_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_n_two
      .add({
        targets: "#n .right-triangle",
        rotate: -180
      })
      .add({
        targets: "#n .right-triangle",
        rotate: 0
      });
  });

  $("#n").mouseleave(function() {
    if (animation_n_one != null) animation_n_one.pause();
    if (animation_n_two != null) animation_n_two.pause();
    if (animation_n_one_return != null) animation_n_one_return.pause();
    if (animation_n_two_return != null) animation_n_two_return.pause();
    animation_n_one_return = anime({
      targets: "#n .rectangle",
      translateX: "0%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });

    animation_n_two_return = anime({
      targets: "#n .right-triangle",
      translateX: "0%",
      translateY: "0%",
      scale: 1,
      rotate: 0
    });
  });

  // O
  var animation_o = null;
  var animation_o_return = null;
  $("#o").mouseenter(function() {
    anime.set("#o .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "270deg"
    });

    animation_o = anime({
      targets: "#o .semi-circle:nth-of-type(2)",
      // scale: "50",
      rotate: "1turn",
      duration: 450000,
      loop: true,
      direction: "normal",
      easing: "easeOutQuad"
    });
  });

  $("#o").mouseleave(function() {
    animation_o.pause();
    animation_o_return = anime({
      targets: "#o .semi-circle:nth-of-type(2)",
      scale: 1,
      rotate: "270deg",
      duration: 1500
    });
  });

  // P
  var animation_p_two = null;
  var animation_p_one_return = null;
  var animation_p_two_return = null;
  $("#p").mouseenter(function() {
    if (animation_p_two != null) animation_p_two.pause();
    if (animation_p_one_return != null) animation_p_one_return.pause();
    if (animation_p_two_return != null) animation_p_two_return.pause();
    anime.set("#p .rectangle", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#p .small-circle", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_p_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_p_two
      .add({
        targets: "#p .small-circle",
        translateX: "-50%",
        translateY: "0%",
        duration: 750
      })
      .add(
        {
          targets: "#p .rectangle",
          translateX: "200%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#p .small-circle",
        translateX: "0%",
        translateY: "50%",
        duration: 750
      })
      .add(
        {
          targets: "#p .rectangle",
          translateX: "0%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#p .small-circle",
        translateX: "-50%",
        duration: 750
      })
      .add(
        {
          targets: "#p .rectangle",
          translateX: "200%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#p .small-circle",
        translateX: "0%",
        translateY: "0%",
        duration: 750
      })
      .add(
        {
          targets: "#p .rectangle",
          translateX: "0%",
          duration: 750
        },
        "-=750"
      );
  });

  $("#p").mouseleave(function() {
    if (animation_p_two != null) animation_p_two.pause();
    if (animation_p_one_return != null) animation_p_one_return.pause();
    if (animation_p_two_return != null) animation_p_two_return.pause();
    animation_p_one_return = anime({
      targets: "#p .rectangle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });

    animation_p_two_return = anime({
      targets: "#p .small-circle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });
  });

  // Q
  var animation_q = null;
  var animation_q_return = null;
  $("#q").mouseenter(function() {
    anime.set("#q .small-semi-circle", {
      translateX: "0%",
      rotate: "45deg"
    });

    animation_q = anime({
      targets: "#q .small-semi-circle",
      scale: "50",
      rotate: "1turn",
      duration: 150000,
      loop: true,
      easing: "easeOutQuad"
    });
  });

  $("#q").mouseleave(function() {
    animation_q.pause();
    animation_q_return = anime({
      targets: "#q .small-semi-circle",
      scale: 1,
      rotate: "45deg",
      duration: 1500
    });
  });

  // R
  var animation_r_one = null;
  var animation_r_two = null;
  var animation_r_one_return = null;
  var animation_r_two_return = null;
  $("#r").mouseenter(function() {
    if (animation_r_one != null) animation_r_one.pause();
    if (animation_r_two != null) animation_r_two.pause();
    if (animation_r_one_return != null) animation_r_one_return.pause();
    if (animation_r_two_return != null) animation_r_two_return.pause();
    anime.set("#r .right-triangle", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#r .small-circle", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_r_one = anime({
      targets: "#r .right-triangle",
      rotate: 180,
      duration: 750,
      direction: "alternate",
      easing: "easeInOutCirc",
      loop: true
    });

    animation_r_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_r_two
      .add({
        targets: "#r .small-circle",
        translateY: "50%"
      })
      .add({
        targets: "#r .small-circle",
        translateY: "0%"
      });
  });

  $("#r").mouseleave(function() {
    if (animation_r_one != null) animation_r_one.pause();
    if (animation_r_two != null) animation_r_two.pause();
    if (animation_r_one_return != null) animation_r_one_return.pause();
    if (animation_r_two_return != null) animation_r_two_return.pause();
    animation_r_one_return = anime({
      targets: "#r .right-triangle",
      translateX: "0%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });

    animation_r_two_return = anime({
      targets: "#r .small-circle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });
  });

  // S
  var animation_s_one = null;
  var animation_s_two = null;
  var animation_s_one_return = null;
  var animation_s_two_return = null;
  $("#s").mouseenter(function() {
    if (animation_s_one != null) animation_s_one.pause();
    if (animation_s_two != null) animation_s_two.pause();
    if (animation_s_one_return != null) animation_s_one_return.pause();
    if (animation_s_two_return != null) animation_s_two_return.pause();
    anime.set("#s .semi-circle:nth-of-type(1)", {
      translateX: "-45%",
      translateY: "-10%",
      rotate: 135
    });

    anime.set("#s .semi-circle:nth-of-type(2)", {
      translateX: "-55%",
      translateY: "10%",
      rotate: 315
    });

    animation_s_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_s_one
      .add({
        targets: "#s .semi-circle:nth-of-type(1)",
        translateY: "0%",
        rotate: 135 + 45
      })
      .add({
        targets: "#s .semi-circle:nth-of-type(1)",
        rotate: 90 + 270
      })
      .add({
        targets: "#s .semi-circle:nth-of-type(1)",
        translateY: "-10%",
        rotate: 360 + 135
      });

    animation_s_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_s_two
      .add({
        targets: "#s .semi-circle:nth-of-type(2)",
        translateY: "0%",
        rotate: 315 + 45
      })
      .add({
        targets: "#s .semi-circle:nth-of-type(2)",
        rotate: 180
      })
      .add({
        targets: "#s .semi-circle:nth-of-type(2)",
        translateY: "10%",
        rotate: 315
      });
  });

  $("#s").mouseleave(function() {
    if (animation_s_one != null) animation_s_one.pause();
    if (animation_s_two != null) animation_s_two.pause();
    if (animation_s_one_return != null) animation_s_one_return.pause();
    if (animation_s_two_return != null) animation_s_two_return.pause();
    animation_s_one_return = anime({
      targets: "#s .semi-circle:nth-of-type(1)",
      translateX: "-45%",
      translateY: "-10%",
      scale: 1,
      rotate: 135
    });

    animation_s_two_return = anime({
      targets: "#s .semi-circle:nth-of-type(2)",
      translateX: "-55%",
      translateY: "10%",
      scale: 1,
      rotate: 315
    });
  });

  // T
  var animation_t = null;
  var animation_t_return = null;
  $("#t").mouseenter(function() {
    anime.set("#t .rectangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_t = anime({
      targets: "#t .rectangle:nth-of-type(2)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeInOutQuad"
    });
  });

  $("#t").mouseleave(function() {
    animation_t.pause();
    animation_t_return = anime({
      targets: "#t .rectangle:nth-of-type(2)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // U
  var animation_u = null;
  var animation_u_return = null;
  $("#u").mouseenter(function() {
    anime.set("#u .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "300deg"
    });

    animation_u = anime({
      targets: "#u .semi-circle:nth-of-type(2)",
      scale: "50",
      rotate: "1turn",
      duration: 350000,
      loop: true,
      easing: "easeOutQuad"
    });
  });

  $("#u").mouseleave(function() {
    animation_u.pause();
    animation_u_return = anime({
      targets: "#u .semi-circle:nth-of-type(2)",
      scale: 1,
      rotate: "300deg",
      duration: 1500
    });
  });

  // V
  var animation_v = null;
  var animation_v_return = null;
  $("#v").mouseenter(function() {
    anime.set("#v .triangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_v = anime({
      targets: "#v .triangle:nth-of-type(2)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#v").mouseleave(function() {
    animation_v.pause();
    animation_v_return = anime({
      targets: "#v .triangle:nth-of-type(2)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // W
  var animation_w = null;
  var animation_w_return = null;
  $("#w").mouseenter(function() {
    anime.set("#w .triangle:nth-of-type(1)", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_w = anime({
      targets: "#w .triangle:nth-of-type(1)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "reverse",
      easing: "easeInOutQuad"
    });
  });

  $("#w").mouseleave(function() {
    animation_w.pause();
    animation_w_return = anime({
      targets: "#w .triangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // X
  var animation_x = null;
  var animation_x_return = null;
  $("#x").mouseenter(function() {
    anime.set("#x .triangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_x = anime({
      targets: "#x .triangle:nth-of-type(2)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#x").mouseleave(function() {
    animation_x.pause();
    animation_x_return = anime({
      targets: "#x .triangle:nth-of-type(2)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // Y
  var animation_y = null;
  var animation_y_return = null;
  $("#y").mouseenter(function() {
    anime.set("#y .semi-circle", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_y = anime({
      targets: "#y .semi-circle",
      // scale: "10",
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeOutQuad"
    });
  });

  $("#y").mouseleave(function() {
    animation_y.pause();
    animation_y_return = anime({
      targets: "#y .semi-circle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // Z
  var animation_z = null;
  var animation_z_return = null;
  $("#z").mouseenter(function() {
    anime.set("#z .rectangle", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_z = anime({
      targets: "#z .rectangle",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeInOutQuad"
    });
  });

  $("#z").mouseleave(function() {
    animation_z.pause();
    animation_z_return = anime({
      targets: "#z .rectangle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // PRISM

  // P
  var animation_p_two = null;
  var animation_p_one_return = null;
  var animation_p_two_return = null;
  $("#word-p").mouseenter(function() {
    if (animation_p_two != null) animation_p_two.pause();
    if (animation_p_one_return != null) animation_p_one_return.pause();
    if (animation_p_two_return != null) animation_p_two_return.pause();
    anime.set("#word-p .rectangle", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#word-p .small-circle", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_p_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_p_two
      .add({
        targets: "#word-p .small-circle",
        translateX: "-50%",
        translateY: "0%",
        duration: 750
      })
      .add(
        {
          targets: "#word-p .rectangle",
          translateX: "200%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#word-p .small-circle",
        translateX: "0%",
        translateY: "50%",
        duration: 750
      })
      .add(
        {
          targets: "#word-p .rectangle",
          translateX: "0%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#word-p .small-circle",
        translateX: "-50%",
        duration: 750
      })
      .add(
        {
          targets: "#word-p .rectangle",
          translateX: "200%",
          duration: 750
        },
        "-=750"
      )
      .add({
        targets: "#word-p .small-circle",
        translateX: "0%",
        translateY: "0%",
        duration: 750
      })
      .add(
        {
          targets: "#word-p .rectangle",
          translateX: "0%",
          duration: 750
        },
        "-=750"
      );
  });

  $("#word-p").mouseleave(function() {
    if (animation_p_two != null) animation_p_two.pause();
    if (animation_p_one_return != null) animation_p_one_return.pause();
    if (animation_p_two_return != null) animation_p_two_return.pause();
    animation_p_one_return = anime({
      targets: "#word-p .rectangle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });

    animation_p_two_return = anime({
      targets: "#word-p .small-circle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });
  });

  // R
  var animation_r_one = null;
  var animation_r_two = null;
  var animation_r_one_return = null;
  var animation_r_two_return = null;
  $("#word-r").mouseenter(function() {
    if (animation_r_one != null) animation_r_one.pause();
    if (animation_r_two != null) animation_r_two.pause();
    if (animation_r_one_return != null) animation_r_one_return.pause();
    if (animation_r_two_return != null) animation_r_two_return.pause();
    anime.set("#word-r .right-triangle", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#word-r .small-circle", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_r_one = anime({
      targets: "#word-r .right-triangle",
      rotate: 180,
      duration: 750,
      direction: "alternate",
      easing: "easeInOutCirc",
      loop: true
    });

    animation_r_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_r_two
      .add({
        targets: "#word-r .small-circle",
        translateY: "50%"
      })
      .add({
        targets: "#word-r .small-circle",
        translateY: "0%"
      });
  });

  $("#word-r").mouseleave(function() {
    if (animation_r_one != null) animation_r_one.pause();
    if (animation_r_two != null) animation_r_two.pause();
    if (animation_r_one_return != null) animation_r_one_return.pause();
    if (animation_r_two_return != null) animation_r_two_return.pause();
    animation_r_one_return = anime({
      targets: "#word-r .right-triangle",
      translateX: "0%",
      translateY: "0%",
      rotate: 0,
      duration: 1500
    });

    animation_r_two_return = anime({
      targets: "#word-r .small-circle",
      translateX: "0%",
      translateY: "0%",
      duration: 1500
    });
  });

  // I
  var animation_i_one = null;
  var animation_i_two = null;
  var animation_i_one_return = null;
  var animation_i_two_return = null;
  $("#word-i").mouseenter(function() {
    if (animation_i_one != null) animation_i_one.pause();
    if (animation_i_two != null) animation_i_two.pause();
    if (animation_i_one_return != null) animation_i_one_return.pause();
    if (animation_i_two_return != null) animation_i_two_return.pause();
    anime.set("#word-i .rectangle:nth-of-type(1)", {
      translateX: "-50%",
      rotate: 0
    });

    anime.set("#word-i .rectangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: 0
    });

    animation_i_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_i_one
      .add({
        targets: "#word-i .rectangle:nth-of-type(1)",
        translateX: "-200%"
      })
      .add({
        targets: "#word-i .rectangle:nth-of-type(1)",
        scaleY: 0.3,
        rotate: 90,
        borderRadius: "50%"
      })
      .add({
        targets: "#word-i .rectangle:nth-of-type(1)",
        translateX: "-50%",
        rotate: 180,
        scaleY: 1,
        borderRadius: "0%"
      });

    animation_i_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_i_two
      .add({
        targets: "#word-i .rectangle:nth-of-type(2)",
        translateX: "100%"
      })
      .add({
        targets: "#word-i .rectangle:nth-of-type(2)",
        scaleY: 0.3,
        rotate: -90,
        borderRadius: "50%"
      })
      .add({
        targets: "#word-i .rectangle:nth-of-type(2)",
        translateX: "-50%",
        rotate: -180,
        scaleY: 1,
        borderRadius: "0%"
      });
  });

  $("#word-i").mouseleave(function() {
    if (animation_i_one != null) animation_i_one.pause();
    if (animation_i_two != null) animation_i_two.pause();
    if (animation_i_one_return != null) animation_i_one_return.pause();
    if (animation_i_two_return != null) animation_i_two_return.pause();
    animation_i_one_return = anime({
      targets: "#word-i .rectangle:nth-of-type(1)",
      translateX: "-50%",
      scaleY: 1,
      rotate: 0,
      borderRadius: "0%",
      duration: 1500
    });

    animation_i_two_return = anime({
      targets: "#word-i .rectangle:nth-of-type(2)",
      translateX: "-50%",
      scaleY: 1,
      rotate: 0,
      borderRadius: "0%",
      duration: 1500
    });
  });

  // S
  var animation_s_one = null;
  var animation_s_two = null;
  var animation_s_one_return = null;
  var animation_s_two_return = null;
  $("#word-s").mouseenter(function() {
    if (animation_s_one != null) animation_s_one.pause();
    if (animation_s_two != null) animation_s_two.pause();
    if (animation_s_one_return != null) animation_s_one_return.pause();
    if (animation_s_two_return != null) animation_s_two_return.pause();
    anime.set("#word-s .semi-circle:nth-of-type(1)", {
      translateX: "-45%",
      translateY: "-10%",
      rotate: 135
    });

    anime.set("#word-s .semi-circle:nth-of-type(2)", {
      translateX: "-55%",
      translateY: "10%",
      rotate: 315
    });

    animation_s_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_s_one
      .add({
        targets: "#word-s .semi-circle:nth-of-type(1)",
        translateY: "0%",
        rotate: 135 + 45
      })
      .add({
        targets: "#word-s .semi-circle:nth-of-type(1)",
        rotate: 90 + 270
      })
      .add({
        targets: "#word-s .semi-circle:nth-of-type(1)",
        translateY: "-10%",
        rotate: 360 + 135
      });

    animation_s_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_s_two
      .add({
        targets: "#word-s .semi-circle:nth-of-type(2)",
        translateY: "0%",
        rotate: 315 + 45
      })
      .add({
        targets: "#word-s .semi-circle:nth-of-type(2)",
        rotate: 180
      })
      .add({
        targets: "#word-s .semi-circle:nth-of-type(2)",
        translateY: "10%",
        rotate: 315
      });
  });

  $("#word-s").mouseleave(function() {
    if (animation_s_one != null) animation_s_one.pause();
    if (animation_s_two != null) animation_s_two.pause();
    if (animation_s_one_return != null) animation_s_one_return.pause();
    if (animation_s_two_return != null) animation_s_two_return.pause();
    animation_s_one_return = anime({
      targets: "#word-s .semi-circle:nth-of-type(1)",
      translateX: "-45%",
      translateY: "-10%",
      scale: 1,
      rotate: 135
    });

    animation_s_two_return = anime({
      targets: "#word-s .semi-circle:nth-of-type(2)",
      translateX: "-55%",
      translateY: "10%",
      scale: 1,
      rotate: 315
    });
  });

  // M
  var animation_m_one = null;
  var animation_m_two = null;
  var animation_m_one_return = null;
  var animation_m_two_return = null;
  $("#word-m").mouseenter(function() {
    if (animation_m_one != null) animation_m_one.pause();
    if (animation_m_two != null) animation_m_two.pause();
    if (animation_m_one_return != null) animation_m_one_return.pause();
    if (animation_m_two_return != null) animation_m_two_return.pause();
    anime.set("#word-m .triangle:nth-of-type(1)", {
      translateX: "0%",
      translateY: "0%"
    });

    anime.set("#word-m .triangle:nth-of-type(2)", {
      translateX: "0%",
      translateY: "0%"
    });

    animation_m_one = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_m_one
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        translateX: "-50%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        translateX: "50%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        translateX: "100%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        translateX: "0%",
        rotate: 0
      });

    animation_m_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_m_two
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "50%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "-50%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "-100%",
        rotate: 0
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "0%",
        rotate: 0
      });
  });

  $("#word-m").mouseleave(function() {
    if (animation_m_one != null) animation_m_one.pause();
    if (animation_m_two != null) animation_m_two.pause();
    if (animation_m_one_return != null) animation_m_one_return.pause();
    if (animation_m_two_return != null) animation_m_two_return.pause();
    animation_m_one_return = anime({
      targets: "#word-m .triangle:nth-of-type(1)",
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });

    animation_m_two_return = anime({
      targets: "#word-m .triangle:nth-of-type(2)",
      translateX: "0%",
      translateY: "0%",
      rotate: 0
    });
  });

  $("#down").on("click", function() {
    $("html").scrollTop(0);
    $("html, body").animate(
      {
        scrollTop: $(".specimen").offset().top
      },
      1000
    );
  });
});
