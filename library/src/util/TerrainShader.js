/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

module.exports = {
  /// TODO: port fog from in-engine

  getFragmentShader: function () {
    return [
      "uniform vec2 uvScale;",
      "uniform vec2 offset;",
      "uniform sampler2D texturePicker;",
      "uniform sampler2D texturePicker2;",
      "uniform sampler2D texture1;",
      "uniform sampler2D texture2;",
      "uniform sampler2D texture3;",
      "uniform sampler2D texture4;",

      "#include <common>",
      "#include <logdepthbuf_pars_fragment>",

      "varying vec2 vUv;",
      "varying vec3 vecNormal;",

      "vec3 blend(",
      "vec4 texture1, float a1, vec4 texture2, float a2,",
      "vec4 texture3, float a3, vec4 texture4, float a4)",
      "{",
      "float depth = 2.0;",
      "float alphaMult = 1.0;",
      "float alphaAdd  = 0.0;",
      "a1 *= 4.0;",
      "a2 *= 4.0;",
      "a3 *= 4.0;",
      "a4 *= 4.0;",
      "a1 =  a1+(1.5+texture1.a);",
      "a2 =  a2+(1.5+texture2.a);",
      "a3 =  a3+(1.5+texture3.a);",
      "a4 =  a4+(1.5+texture4.a);",
      "float ma = max(a1,a2);",
      "ma = max(ma,a3);",
      "ma = max(ma,a4);",
      "ma -= depth;",
      "float b1 = max(a1 - ma, 0.0);",
      "float b2 = max(a2 - ma, 0.0);",
      "float b3 = max(a3 - ma, 0.0);",
      "float b4 = max(a4 - ma, 0.0);",
      "return (",
      "texture1.rgb * b1 + texture2.rgb * b2 +",
      "texture3.rgb * b3 + texture4.rgb * b4 ",
      ") / (b1 + b2 + b3 + b4);",
      "}",

      "void main( void ) {",
      "vec2 position = vUv*uvScale;",
      "float edge = 1.0/1024.0;",
      "vec2 compPos = edge + (vUv*0.25 + offset) * (1.0-edge*2.0);",
      "vec4 tp1 = texture2D( texturePicker, compPos);",
      "vec4 tp2 = texture2D( texturePicker2, compPos);",
      "vec4 composite = tp1;",
      "vec4 t1 = texture2D( texture1, position );",
      "vec4 t2 = texture2D( texture2, position );",
      "vec4 t3 = texture2D( texture3, position );",
      "vec4 t4 = texture2D( texture4, position );",
      "vec3 color = blend(",
      "t1, tp1.a,",
      "t2, tp1.b,",
      "t3, tp1.g,",
      "t4, tp1.r",
      ");",
      "color *= 0.5+tp2.r;",
      "gl_FragColor = vec4(color,1.0);",

      "#include <logdepthbuf_fragment>",

      "}",
    ].join("\n");
  },
  getVertexShader: function () {
    return [
      "varying vec2 vUv;",
      "varying vec3 vecNormal;",

      "#include <common>",
      "#include <logdepthbuf_pars_vertex>",

      "void main()",
      "{",
      "vUv =  uv;",
      "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
      "vecNormal = (modelMatrix * vec4(normal, 0.0)).xyz;",
      "gl_Position = projectionMatrix * mvPosition;",

      "#include <logdepthbuf_vertex>",

      "}",
    ].join("\n");
  },
};
