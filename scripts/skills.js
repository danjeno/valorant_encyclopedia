

//ASTRA SKILLS
function astra_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[0];
  videocontainer = document.querySelectorAll(".video-container")[0];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("astra-skill-name").innerHTML = "Q - NOVA PULSE";
    document.getElementById("astra-skill-description").innerHTML =
      "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.";
    document.getElementById("astra-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}
function astra_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[0];
  videocontainer = document.querySelectorAll(".video-container")[0];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
    document.getElementById("astra-skill-name").innerHTML = "E - NEBULA";
    document.getElementById("astra-skill-description").innerHTML =
      "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay.";
    document.getElementById("astra-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}
function astra_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[0];
  videocontainer = document.querySelectorAll(".video-container")[0];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("astra-skill-name").innerHTML = "C - GRAVITY WELL";
  document.getElementById("astra-skill-description").innerHTML =
    "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.";
  document.getElementById("astra-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function astra_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[0];
  videocontainer = document.querySelectorAll(".video-container")[0];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
    document.getElementById("astra-skill-name").innerHTML =
    "X - ASTRAL FORM / COSMIC DIVIDE";
    document.getElementById("astra-skill-description").innerHTML =
    "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well.";
    document.getElementById("astra-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//BRIMSTONE SKILLS

function brimstone_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[1];
  videocontainer = document.querySelectorAll(".video-container")[1];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("brimstone-skill-name").innerHTML = "Q - INCENDIARY";
    document.getElementById("brimstone-skill-description").innerHTML =
      "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.";
    document.getElementById("brimstone-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}
function brimstone_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[1];
  videocontainer = document.querySelectorAll(".video-container")[1];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
    document.getElementById("brimstone-skill-name").innerHTML = "E - SKY SMOKE";
    document.getElementById("brimstone-skill-description").innerHTML =
      "EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.";
    document.getElementById("brimstone-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}
function brimstone_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[1];
  videocontainer = document.querySelectorAll(".video-container")[1];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("brimstone-skill-name").innerHTML = "C - STIM BEACON";
  document.getElementById("brimstone-skill-description").innerHTML =
    "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.";
  document.getElementById("brimstone-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function brimstone_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[1];
  videocontainer = document.querySelectorAll(".video-container")[1];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
    document.getElementById("brimstone-skill-name").innerHTML =
    "X - ORBITAL STRIKE";
    document.getElementById("brimstone-skill-description").innerHTML =
    "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.";
    document.getElementById("brimstone-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//OMEN SKILLS


function omen_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[2];
  videocontainer = document.querySelectorAll(".video-container")[2];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("omen-skill-name").innerHTML = "Q - PARANOIA";
    document.getElementById("omen-skill-description").innerHTML =
      "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.";
    document.getElementById("omen-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function omen_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[2];
  videocontainer = document.querySelectorAll(".video-container")[2];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("omen-skill-name").innerHTML = "E - DARK COVER";
    document.getElementById("omen-skill-description").innerHTML =
      "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision.";
    document.getElementById("omen-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function omen_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[2];
  videocontainer = document.querySelectorAll(".video-container")[2];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("omen-skill-name").innerHTML = "C - SHROUDED STEP";
  document.getElementById("omen-skill-description").innerHTML =
    "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.";
  document.getElementById("omen-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function omen_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[2];
  videocontainer = document.querySelectorAll(".video-container")[2];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("omen-skill-name").innerHTML =
    "X - FROM THE SHADOWS";
  document.getElementById("omen-skill-description").innerHTML =
    "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.";
  document.getElementById("omen-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}



//VIPER SKILLS

function viper_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[3];
  videocontainer = document.querySelectorAll(".video-container")[3];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("viper-skill-name").innerHTML = "Q - POISON CLOUD";
    document.getElementById("viper-skill-description").innerHTML =
      "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel.";
    document.getElementById("viper-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function viper_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[3];
  videocontainer = document.querySelectorAll(".video-container")[3];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("viper-skill-name").innerHTML = "E - TOXIC SCREEN";
    document.getElementById("viper-skill-description").innerHTML =
      "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.";
    document.getElementById("viper-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function viper_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[3];
  videocontainer = document.querySelectorAll(".video-container")[3];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("viper-skill-name").innerHTML = "C - SNAKE BITE";
  document.getElementById("viper-skill-description").innerHTML =
    "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.";
  document.getElementById("viper-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function viper_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[3];
  videocontainer = document.querySelectorAll(".video-container")[3];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("viper-skill-name").innerHTML =
    "X - VIPER’S PIT";
  document.getElementById("viper-skill-description").innerHTML =
    "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.";
  document.getElementById("viper-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//JETT SKILLS

function jett_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[4];
  videocontainer = document.querySelectorAll(".video-container")[4];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("jett-skill-name").innerHTML = "Q - UPDRAFT";
    document.getElementById("jett-skill-description").innerHTML =
      "INSTANTLY propel Jett high into the air.";
    document.getElementById("jett-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function jett_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[4];
  videocontainer = document.querySelectorAll(".video-container")[4];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("jett-skill-name").innerHTML = "E - TAILWIND";
    document.getElementById("jett-skill-description").innerHTML =
      "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.";
    document.getElementById("jett-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function jett_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[4];
  videocontainer = document.querySelectorAll(".video-container")[4];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("jett-skill-name").innerHTML = "C - CLOUDBURST";
  document.getElementById("jett-skill-description").innerHTML =
    "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.";
  document.getElementById("jett-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function jett_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[4];
  videocontainer = document.querySelectorAll(".video-container")[4];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("jett-skill-name").innerHTML =
    "X - BLADE STORM";
  document.getElementById("jett-skill-description").innerHTML =
    "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.";
  document.getElementById("jett-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}


//NEON SKILLS

function neon_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[5];
  videocontainer = document.querySelectorAll(".video-container")[5];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("neon-skill-name").innerHTML = "Q - RELAY BOLT";
    document.getElementById("neon-skill-description").innerHTML =
      "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.";
    document.getElementById("neon-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function neon_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[5];
  videocontainer = document.querySelectorAll(".video-container")[5];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("neon-skill-name").innerHTML = "E - HIGH GEAR";
    document.getElementById("neon-skill-description").innerHTML =
      "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.";
    document.getElementById("neon-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function neon_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[5];
  videocontainer = document.querySelectorAll(".video-container")[5];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("neon-skill-name").innerHTML = "C - FAST LANE";
  document.getElementById("neon-skill-description").innerHTML =
    "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.";
  document.getElementById("neon-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function neon_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[5];
  videocontainer = document.querySelectorAll(".video-container")[5];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("neon-skill-name").innerHTML =
    "X - OVERDRIVE";
  document.getElementById("neon-skill-description").innerHTML =
    "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.";
  document.getElementById("neon-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//PHOENIX SKILLS

function phoenix_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[6];
  videocontainer = document.querySelectorAll(".video-container")[6];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("phoenix-skill-name").innerHTML = "Q - CURVEBALL";
    document.getElementById("phoenix-skill-description").innerHTML =
      "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.";
    document.getElementById("phoenix-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function phoenix_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[6];
  videocontainer = document.querySelectorAll(".video-container")[6];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("phoenix-skill-name").innerHTML = "E - HOT HANDS";
    document.getElementById("phoenix-skill-description").innerHTML =
      "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.";
    document.getElementById("phoenix-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function phoenix_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[6];
  videocontainer = document.querySelectorAll(".video-container")[6];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("phoenix-skill-name").innerHTML = "C - BLAZE";
  document.getElementById("phoenix-skill-description").innerHTML =
    "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.";
  document.getElementById("phoenix-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function phoenix_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[6];
  videocontainer = document.querySelectorAll(".video-container")[6];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("phoenix-skill-name").innerHTML =
    "X - RUN IT BACK";
  document.getElementById("phoenix-skill-description").innerHTML =
    "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.";
  document.getElementById("phoenix-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//RAZE SKILLS

function raze_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[7];
  videocontainer = document.querySelectorAll(".video-container")[7];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("raze-skill-name").innerHTML = "Q - BLAST PACK";
    document.getElementById("raze-skill-description").innerHTML =
      "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.";
    document.getElementById("raze-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function raze_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[7];
  videocontainer = document.querySelectorAll(".video-container")[7];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("raze-skill-name").innerHTML = "E - PAINT SHELLS";
    document.getElementById("raze-skill-description").innerHTML =
      "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.";
    document.getElementById("raze-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function raze_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[7];
  videocontainer = document.querySelectorAll(".video-container")[7];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("raze-skill-name").innerHTML = "C - BOOM BOT";
  document.getElementById("raze-skill-description").innerHTML =
    "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.";
  document.getElementById("raze-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function raze_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[7];
  videocontainer = document.querySelectorAll(".video-container")[7];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("raze-skill-name").innerHTML =
    "X - SHOWSTOPPER";
  document.getElementById("raze-skill-description").innerHTML =
    "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.";
  document.getElementById("raze-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//REYNA SKILLS

function reyna_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[8];
  videocontainer = document.querySelectorAll(".video-container")[8];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("reyna-skill-name").innerHTML = "Q - DEVOUR";
    document.getElementById("reyna-skill-description").innerHTML =
      "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time.";
    document.getElementById("reyna-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function reyna_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[8];
  videocontainer = document.querySelectorAll(".video-container")[8];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("reyna-skill-name").innerHTML = "E - DISMISS";
    document.getElementById("reyna-skill-description").innerHTML =
      "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.";
    document.getElementById("reyna-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function reyna_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[8];
  videocontainer = document.querySelectorAll(".video-container")[8];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("reyna-skill-name").innerHTML = "C - LEER";
  document.getElementById("reyna-skill-description").innerHTML =
    "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.";
  document.getElementById("reyna-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function reyna_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[8];
  videocontainer = document.querySelectorAll(".video-container")[8];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("reyna-skill-name").innerHTML =
    "X - EMPRESS";
  document.getElementById("reyna-skill-description").innerHTML =
    "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.";
  document.getElementById("reyna-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//YORU SKILLS

function yoru_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[9];
  videocontainer = document.querySelectorAll(".video-container")[9];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("yoru-skill-name").innerHTML = "Q - BLINDSIDE";
    document.getElementById("yoru-skill-description").innerHTML =
      "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world";
    document.getElementById("yoru-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function yoru_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[9];
  videocontainer = document.querySelectorAll(".video-container")[9];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("yoru-skill-name").innerHTML = "E - GATECRASH";
    document.getElementById("yoru-skill-description").innerHTML =
      "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport.";
    document.getElementById("yoru-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function yoru_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[9];
  videocontainer = document.querySelectorAll(".video-container")[9];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("yoru-skill-name").innerHTML = "C - FAKEOUT";
  document.getElementById("yoru-skill-description").innerHTML =
    "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward.";
  document.getElementById("yoru-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function yoru_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[9];
  videocontainer = document.querySelectorAll(".video-container")[9];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("yoru-skill-name").innerHTML =
    "X - DIMENSIONAL DRIFT";
  document.getElementById("yoru-skill-description").innerHTML =
    "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside";
  document.getElementById("yoru-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//BREACH SKILLS


function breach_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[10];
  videocontainer = document.querySelectorAll(".video-container")[10];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("breach-skill-name").innerHTML = "Q - FLASHPOINT";
    document.getElementById("breach-skill-description").innerHTML =
      "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.";
    document.getElementById("breach-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function breach_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[10];
  videocontainer = document.querySelectorAll(".video-container")[10];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("breach-skill-name").innerHTML = "E - FAULT LINE";
    document.getElementById("breach-skill-description").innerHTML =
      "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.";
    document.getElementById("breach-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function breach_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[10];
  videocontainer = document.querySelectorAll(".video-container")[10];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("breach-skill-name").innerHTML = "C - AFTERSHOCK";
  document.getElementById("breach-skill-description").innerHTML =
    "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.";
  document.getElementById("breach-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function breach_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[10];
  videocontainer = document.querySelectorAll(".video-container")[10];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("breach-skill-name").innerHTML =
    "X - ROLLING THUNDER";
  document.getElementById("breach-skill-description").innerHTML =
    "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.";
  document.getElementById("breach-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//FADE SKILLS

function fade_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[11];
  videocontainer = document.querySelectorAll(".video-container")[11];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("fade-skill-name").innerHTML = "Q - SEIZE";
    document.getElementById("fade-skill-description").innerHTML =
      "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means.";
    document.getElementById("fade-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function fade_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[11];
  videocontainer = document.querySelectorAll(".video-container")[11];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("fade-skill-name").innerHTML = "E - HAUNT";
    document.getElementById("fade-skill-description").innerHTML =
      "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight.";
    document.getElementById("fade-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function fade_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[11];
  videocontainer = document.querySelectorAll(".video-container")[11];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("fade-skill-name").innerHTML = "C - PROWLER";
  document.getElementById("fade-skill-description").innerHTML =
    "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them.";
  document.getElementById("fade-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function fade_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[11];
  videocontainer = document.querySelectorAll(".video-container")[11];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("fade-skill-name").innerHTML =
    "X - NIGHTFALL";
  document.getElementById("fade-skill-description").innerHTML =
    "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.";
  document.getElementById("fade-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//KAY/O SKILLS

function kayo_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[12];
  videocontainer = document.querySelectorAll(".video-container")[12];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("kayo-skill-name").innerHTML = "Q - FLASH/DRIVE";
    document.getElementById("kayo-skill-description").innerHTML =
      "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.";
    document.getElementById("kayo-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function kayo_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[12];
  videocontainer = document.querySelectorAll(".video-container")[12];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("kayo-skill-name").innerHTML = "E - ZERO/POINT";
    document.getElementById("kayo-skill-description").innerHTML =
      "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.";
    document.getElementById("kayo-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function kayo_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[12];
  videocontainer = document.querySelectorAll(".video-container")[12];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("kayo-skill-name").innerHTML = "C - FRAG/MENT";
  document.getElementById("kayo-skill-description").innerHTML =
    "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.";
  document.getElementById("kayo-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function kayo_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[12];
  videocontainer = document.querySelectorAll(".video-container")[12];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("kayo-skill-name").innerHTML =
    "X - NULL/CMD";
  document.getElementById("kayo-skill-description").innerHTML =
    "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.";
  document.getElementById("kayo-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//SKYE SKILLS

function skye_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[13];
  videocontainer = document.querySelectorAll(".video-container")[13];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("skye-skill-name").innerHTML = "Q - TRAILBLAZER";
    document.getElementById("skye-skill-description").innerHTML =
      "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.";
    document.getElementById("skye-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function skye_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[13];
  videocontainer = document.querySelectorAll(".video-container")[13];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("skye-skill-name").innerHTML = "E - GUIDING LIGHT";
    document.getElementById("skye-skill-description").innerHTML =
      "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.";
    document.getElementById("skye-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function skye_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[13];
  videocontainer = document.querySelectorAll(".video-container")[13];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("skye-skill-name").innerHTML = "C - REGROWTH";
  document.getElementById("skye-skill-description").innerHTML =
    "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.";
  document.getElementById("skye-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function skye_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[13];
  videocontainer = document.querySelectorAll(".video-container")[13];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("skye-skill-name").innerHTML =
    "X - SEEKERS";
  document.getElementById("skye-skill-description").innerHTML =
    "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.";
  document.getElementById("skye-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//SOVA SKILLS

function sova_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[14];
  videocontainer = document.querySelectorAll(".video-container")[14];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("sova-skill-name").innerHTML = "Q - SHOCK BOLT";
    document.getElementById("sova-skill-description").innerHTML =
      "EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow";
    document.getElementById("sova-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function sova_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[14];
  videocontainer = document.querySelectorAll(".video-container")[14];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("sova-skill-name").innerHTML = "E - RECON BOLT";
    document.getElementById("sova-skill-description").innerHTML =
      "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile.";
    document.getElementById("sova-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function sova_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[14];
  videocontainer = document.querySelectorAll(".video-container")[14];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("sova-skill-name").innerHTML = "C - OWL DRONE";
  document.getElementById("sova-skill-description").innerHTML =
    "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
  document.getElementById("sova-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function sova_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[14];
  videocontainer = document.querySelectorAll(".video-container")[14];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("sova-skill-name").innerHTML =
    "X - HUNTER’S FURY";
  document.getElementById("sova-skill-description").innerHTML =
    "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line.";
  document.getElementById("sova-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//CHAMBER SKILLS

function chamber_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[15];
  videocontainer = document.querySelectorAll(".video-container")[15];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("chamber-skill-name").innerHTML = "Q - HEADHUNTER";
    document.getElementById("chamber-skill-description").innerHTML =
      "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.";
    document.getElementById("chamber-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function chamber_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[15];
  videocontainer = document.querySelectorAll(".video-container")[15];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("chamber-skill-name").innerHTML = "E - RENDEZVOUS";
    document.getElementById("chamber-skill-description").innerHTML =
      "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.";
    document.getElementById("chamber-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function chamber_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[15];
  videocontainer = document.querySelectorAll(".video-container")[15];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("chamber-skill-name").innerHTML = "C - TRADEMARK";
  document.getElementById("chamber-skill-description").innerHTML =
    "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.";
  document.getElementById("chamber-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function chamber_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[15];
  videocontainer = document.querySelectorAll(".video-container")[15];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("chamber-skill-name").innerHTML =
    "X - TOUR DE FORCE";
  document.getElementById("chamber-skill-description").innerHTML =
    "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.";
  document.getElementById("chamber-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//CYPHER SKILLS

function cypher_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[16];
  videocontainer = document.querySelectorAll(".video-container")[16];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("cypher-skill-name").innerHTML = "Q - CYBER CAGE";
    document.getElementById("cypher-skill-description").innerHTML =
      "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it";
    document.getElementById("cypher-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function cypher_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[16];
  videocontainer = document.querySelectorAll(".video-container")[16];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("cypher-skill-name").innerHTML = "E - SPYCAM";
    document.getElementById("cypher-skill-description").innerHTML =
      "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
    document.getElementById("cypher-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function cypher_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[16];
  videocontainer = document.querySelectorAll(".video-container")[16];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("cypher-skill-name").innerHTML = "C - TRAPWIRE";
  document.getElementById("cypher-skill-description").innerHTML =
    "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time.";
  document.getElementById("cypher-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function cypher_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[16];
  videocontainer = document.querySelectorAll(".video-container")[16];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("cypher-skill-name").innerHTML =
    "X - NEURAL THEFT";
  document.getElementById("cypher-skill-description").innerHTML =
    "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.";
  document.getElementById("cypher-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//KILLJOY SKILLS

function killjoy_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[17];
  videocontainer = document.querySelectorAll(".video-container")[17];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("killjoy-skill-name").innerHTML = "Q - ALARMBOT";
    document.getElementById("killjoy-skill-description").innerHTML =
      "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.";
    document.getElementById("killjoy-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function killjoy_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[17];
  videocontainer = document.querySelectorAll(".video-container")[17];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("killjoy-skill-name").innerHTML = "E - TURRET";
    document.getElementById("killjoy-skill-description").innerHTML =
      "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.";
    document.getElementById("killjoy-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function killjoy_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[17];
  videocontainer = document.querySelectorAll(".video-container")[17];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("killjoy-skill-name").innerHTML = "C - NANOSWARM";
  document.getElementById("killjoy-skill-description").innerHTML =
    "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.";
  document.getElementById("killjoy-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function killjoy_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[17];
  videocontainer = document.querySelectorAll(".video-container")[17];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("killjoy-skill-name").innerHTML =
    "X - LOCKDOWN";
  document.getElementById("killjoy-skill-description").innerHTML =
    "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.";
  document.getElementById("killjoy-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

//SAGE SKILLS

function sage_change_skill_q() {
  container = document.querySelectorAll(".skills-text")[18];
  videocontainer = document.querySelectorAll(".video-container")[18];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("sage-skill-name").innerHTML = "Q - SLOW ORB";
    document.getElementById("sage-skill-description").innerHTML =
      "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.";
    document.getElementById("sage-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function sage_change_skill_w() {
  container = document.querySelectorAll(".skills-text")[18];
  videocontainer = document.querySelectorAll(".video-container")[18];
  container.classList.add("pre-animation");
  videocontainer.classList.add("pre-animation");
  setTimeout(function () {
    document.getElementById("sage-skill-name").innerHTML = "E - HEALING ORB";
    document.getElementById("sage-skill-description").innerHTML =
      "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.";
    document.getElementById("sage-skill-video").src =
      "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4";
  }, 200);
  setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
  }, 200);
}

function sage_change_skill_e() {
  container = document.querySelectorAll(".skills-text")[18];
  videocontainer = document.querySelectorAll(".video-container")[18];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("sage-skill-name").innerHTML = "C - BARRIER ORB";
  document.getElementById("sage-skill-description").innerHTML =
    "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.";
  document.getElementById("sage-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}

function sage_change_skill_r() {
  container = document.querySelectorAll(".skills-text")[18];
  videocontainer = document.querySelectorAll(".video-container")[18];
    container.classList.add("pre-animation");
    videocontainer.classList.add("pre-animation");
    setTimeout(function () {
  document.getElementById("sage-skill-name").innerHTML =
    "X - RESURRECTION";
  document.getElementById("sage-skill-description").innerHTML =
    "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.";
  document.getElementById("sage-skill-video").src =
    "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4";
    }, 200);
    setTimeout(function () {
    container.classList.remove("pre-animation");
    videocontainer.classList.remove("pre-animation");
    }, 200);
}