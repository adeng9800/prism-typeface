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
  var animation_a = null;
  var animation_a_return = null;
  $("#a").mouseenter(function() {
    anime.set("#a .triangle:nth-of-type(1)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_a = anime({
      targets: "#a .triangle:nth-of-type(1)",
      keyframes: [{ scale: "3" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#a").mouseleave(function() {
    animation_a.pause();
    animation_a_return = anime({
      targets: "#a .triangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // B
  var animation_b = null;
  var animation_b_return = null;
  $("#b").mouseenter(function() {
    anime.set("#b .semi-circle", {
      translateX: "-40%",
      rotate: "0deg"
    });

    animation_b = anime({
      targets: "#b .semi-circle",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      easing: "easeInOutQuad"
    });
  });

  $("#b").mouseleave(function() {
    animation_b.pause();
    animation_b_return = anime({
      targets: "#b .semi-circle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // C
  var animation_c = null;
  var animation_c_return = null;
  $("#c").mouseenter(function() {
    anime.set("#c .semi-circle:nth-of-type(1)", {
      translateX: "-50%",
      rotate: "135deg"
    });

    animation_c = anime({
      targets: "#c .semi-circle:nth-of-type(1)",
      scale: "50",
      rotate: "1turn",
      duration: 150000,
      loop: true,
      easing: "easeOutQuad"
    });
  });

  $("#c").mouseleave(function() {
    animation_c.pause();
    animation_c_return = anime({
      targets: "#c .semi-circle:nth-of-type(1)",
      scale: 1,
      rotate: "135deg",
      duration: 1500
    });
  });

  // D
  var animation_d = null;
  var animation_d_return = null;
  $("#d").mouseenter(function() {
    anime.set("#d .rectangle", {
      translateX: "40%",
      rotate: "0deg"
    });

    animation_d = anime({
      targets: "#d .rectangle",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeInOutQuad"
    });
  });

  $("#d").mouseleave(function() {
    animation_d.pause();
    animation_d_return = anime({
      targets: "#d .rectangle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // E
  var animation_e = null;
  var animation_e_return = null;
  $("#e").mouseenter(function() {
    anime.set("#e .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "90deg"
    });

    animation_e = anime({
      targets: "#e .semi-circle:nth-of-type(2)",
      scale: "50",
      rotate: "1turn",
      duration: 150000,
      loop: true,
      direction: "normal",
      easing: "easeOutQuad"
    });
  });

  $("#e").mouseleave(function() {
    animation_e.pause();
    animation_e_return = anime({
      targets: "#e .semi-circle:nth-of-type(2)",
      scale: 1,
      rotate: "90deg",
      duration: 1500
    });
  });

  // F
  var animation_f = null;
  var animation_f_return = null;
  $("#f").mouseenter(function() {
    anime.set("#f .right-triangle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_f = anime({
      targets: "#f .right-triangle:nth-of-type(2)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#f").mouseleave(function() {
    animation_f.pause();
    animation_f_return = anime({
      targets: "#f .right-triangle:nth-of-type(2)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // G
  var animation_g = null;
  var animation_g_return = null;
  $("#g").mouseenter(function() {
    anime.set("#g .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_g = anime({
      targets: "#g .semi-circle:nth-of-type(2)",
      // scale: "10",
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeInOutQuad"
    });
  });

  $("#g").mouseleave(function() {
    animation_g.pause();
    animation_g_return = anime({
      targets: "#g .semi-circle:nth-of-type(2)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // H
  var animation_h = null;
  var animation_h_return = null;
  $("#h").mouseenter(function() {
    anime.set("#h .rectangle", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_h = anime({
      targets: "#h .rectangle",
      keyframes: [{ scale: "3" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#h").mouseleave(function() {
    animation_h.pause();
    animation_h_return = anime({
      targets: "#h .rectangle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // I
  var animation_i = null;
  var animation_i_return = null;
  $("#i").mouseenter(function() {
    anime.set("#i .rectangle:nth-of-type(1)", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_i = anime({
      targets: "#i .rectangle:nth-of-type(1)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "reverse",
      easing: "easeInOutQuad"
    });
  });

  $("#i").mouseleave(function() {
    animation_i.pause();
    animation_i_return = anime({
      targets: "#i .rectangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // J
  var animation_j = null;
  var animation_j_return = null;
  $("#j").mouseenter(function() {
    anime.set("#j .semi-circle", {
      translateX: "-50%",
      rotate: "0deg"
    });

    animation_j = anime({
      targets: "#j .semi-circle",
      keyframes: [{ scale: "10" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      easing: "easeInOutQuad"
    });
  });

  $("#j").mouseleave(function() {
    animation_j.pause();
    animation_j_return = anime({
      targets: "#j .semi-circle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // K
  var animation_k = null;
  var animation_k_return = null;
  $("#k").mouseenter(function() {
    anime.set("#k .right-triangle:nth-of-type(1)", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_k = anime({
      targets: "#k .right-triangle:nth-of-type(1)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#k").mouseleave(function() {
    animation_k.pause();
    animation_k_return = anime({
      targets: "#k .right-triangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // L
  var animation_l = null;
  var animation_l_return = null;
  $("#l").mouseenter(function() {
    anime.set("#l .rectangle:nth-of-type(1)", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_l = anime({
      targets: "#l .rectangle:nth-of-type(1)",
      keyframes: [
        { scale: "5" },
        { scale: "10" },
        { scale: "5" },
        { scale: "1" }
      ],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "normal",
      easing: "easeInOutQuad"
    });
  });

  $("#l").mouseleave(function() {
    animation_l.pause();
    animation_l_return = anime({
      targets: "#l .rectangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // M
  var animation_m = null;
  var animation_m_return = null;
  $("#m").mouseenter(function() {
    anime.set("#m .triangle:nth-of-type(1)", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_m = anime({
      targets: "#m .triangle:nth-of-type(1)",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "reverse",
      easing: "easeInOutQuad"
    });
  });

  $("#m").mouseleave(function() {
    animation_m.pause();
    animation_m_return = anime({
      targets: "#m .triangle:nth-of-type(1)",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // N
  var animation_n = null;
  var animation_n_return = null;
  $("#n").mouseenter(function() {
    anime.set("#n .right-triangle", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_n = anime({
      targets: "#n .right-triangle",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#n").mouseleave(function() {
    animation_n.pause();
    animation_n_return = anime({
      targets: "#n .right-triangle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
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
    console.log("enter");
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
    console.log("leave");
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
  var animation_r = null;
  var animation_r_return = null;
  $("#r").mouseenter(function() {
    anime.set("#r .right-triangle", {
      translateX: "0%",
      rotate: "0deg"
    });

    animation_r = anime({
      targets: "#r .right-triangle",
      keyframes: [{ scale: "5" }, { scale: "1" }],
      rotate: "1turn",
      duration: 1500,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad"
    });
  });

  $("#r").mouseleave(function() {
    animation_r.pause();
    animation_r_return = anime({
      targets: "#r .right-triangle",
      scale: 1,
      rotate: "0deg",
      duration: 1500
    });
  });

  // S
  var animation_s = null;
  var animation_s_return = null;
  $("#s").mouseenter(function() {
    anime.set("#s .semi-circle:nth-of-type(2)", {
      translateX: "-50%",
      rotate: "315deg"
    });

    animation_s = anime({
      targets: "#s .semi-circle:nth-of-type(2)",
      scale: "50",
      rotate: "1turn",
      duration: 350000,
      loop: true,
      easing: "easeOutQuad"
    });
  });

  $("#s").mouseleave(function() {
    animation_s.pause();
    animation_s_return = anime({
      targets: "#s .semi-circle:nth-of-type(2)",
      scale: 1,
      rotate: "315deg",
      duration: 1500
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
        rotate: 180
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        rotate: 0,
        translateX: "100%"
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(1)",
        rotate: 0,
        translateX: "0%"
      });

    animation_m_two = anime.timeline({
      easing: "easeInOutCirc",
      duration: 750,
      loop: true
    });

    animation_m_two
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "80%"
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "0%"
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "-100%"
      })
      .add({
        targets: "#word-m .triangle:nth-of-type(2)",
        translateX: "0%"
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
      translateY: "0%"
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
