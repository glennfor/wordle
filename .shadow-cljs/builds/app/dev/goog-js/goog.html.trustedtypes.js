["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/trustedtypes.js"],"~:js","goog.provide(\"goog.html.trustedtypes\");\ngoog.html.trustedtypes.POLICY_NAME = goog.define(\"goog.html.trustedtypes.POLICY_NAME\", goog.TRUSTED_TYPES_POLICY_NAME ? goog.TRUSTED_TYPES_POLICY_NAME + \"#html\" : \"\");\ngoog.html.trustedtypes.cachedPolicy_;\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\n  if (!goog.html.trustedtypes.POLICY_NAME) {\n    return null;\n  }\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\n    goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.html.trustedtypes.POLICY_NAME);\n  }\n  return goog.html.trustedtypes.cachedPolicy_;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Policy to convert strings to Trusted Types. See\n * https://github.com/WICG/trusted-types for details.\n */\n\ngoog.provide('goog.html.trustedtypes');\n\n\n/**\n * @define {string} Name for the Trusted Types policy used in Closure Safe\n * Types. Differs from `goog.TRUSTED_TYPES_POLICY_NAME` in that the latter is\n * also used for other purposes like the debug loader. If empty, Closure Safe\n * Types will not use Trusted Types. Default is `goog.TRUSTED_TYPES_POLICY_NAME`\n * plus the suffix `#html`, unless `goog.TRUSTED_TYPES_POLICY_NAME` is empty.\n * @package\n */\ngoog.html.trustedtypes.POLICY_NAME = goog.define(\n    'goog.html.trustedtypes.POLICY_NAME',\n    goog.TRUSTED_TYPES_POLICY_NAME ? goog.TRUSTED_TYPES_POLICY_NAME + '#html' :\n                                     '');\n\n\n/**\n * Cached result of goog.createTrustedTypesPolicy.\n * @type {?TrustedTypePolicy|undefined}\n * @private\n */\ngoog.html.trustedtypes.cachedPolicy_;\n\n\n/**\n * Creates a (singleton) Trusted Type Policy for Safe HTML Types.\n * @return {?TrustedTypePolicy}\n * @package\n */\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\n  'use strict';\n  if (!goog.html.trustedtypes.POLICY_NAME) {\n    // Binary not configured for Trusted Types.\n    return null;\n  }\n\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\n    goog.html.trustedtypes.cachedPolicy_ =\n        goog.createTrustedTypesPolicy(goog.html.trustedtypes.POLICY_NAME);\n  }\n\n  return goog.html.trustedtypes.cachedPolicy_;\n};\n","~:compiled-at",1703880760206,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.trustedtypes.js\",\n\"lineCount\":13,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,wBAAb,CAAA;AAWAD,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,WAAvB,GAAqCJ,IAAKK,CAAAA,MAAL,CACjC,oCADiC,EAEjCL,IAAKM,CAAAA,yBAAL,GAAiCN,IAAKM,CAAAA,yBAAtC,GAAkE,OAAlE,GACiC,EAHA,CAArC;AAWAN,IAAKE,CAAAA,IAAKC,CAAAA,YAAaI,CAAAA,aAAvB;AAQAP,IAAKE,CAAAA,IAAKC,CAAAA,YAAaK,CAAAA,iCAAvB,GAA2DC,QAAQ,EAAG;AAEpE,MAAI,CAACT,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,WAA5B;AAEE,WAAO,IAAP;AAFF;AAKA,MAAIJ,IAAKE,CAAAA,IAAKC,CAAAA,YAAaI,CAAAA,aAA3B,KAA6CG,SAA7C;AACEV,QAAKE,CAAAA,IAAKC,CAAAA,YAAaI,CAAAA,aAAvB,GACIP,IAAKW,CAAAA,wBAAL,CAA8BX,IAAKE,CAAAA,IAAKC,CAAAA,YAAaC,CAAAA,WAArD,CADJ;AADF;AAKA,SAAOJ,IAAKE,CAAAA,IAAKC,CAAAA,YAAaI,CAAAA,aAA9B;AAZoE,CAAtE;;\",\n\"sources\":[\"goog/html/trustedtypes.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Policy to convert strings to Trusted Types. See\\n * https://github.com/WICG/trusted-types for details.\\n */\\n\\ngoog.provide('goog.html.trustedtypes');\\n\\n\\n/**\\n * @define {string} Name for the Trusted Types policy used in Closure Safe\\n * Types. Differs from `goog.TRUSTED_TYPES_POLICY_NAME` in that the latter is\\n * also used for other purposes like the debug loader. If empty, Closure Safe\\n * Types will not use Trusted Types. Default is `goog.TRUSTED_TYPES_POLICY_NAME`\\n * plus the suffix `#html`, unless `goog.TRUSTED_TYPES_POLICY_NAME` is empty.\\n * @package\\n */\\ngoog.html.trustedtypes.POLICY_NAME = goog.define(\\n    'goog.html.trustedtypes.POLICY_NAME',\\n    goog.TRUSTED_TYPES_POLICY_NAME ? goog.TRUSTED_TYPES_POLICY_NAME + '#html' :\\n                                     '');\\n\\n\\n/**\\n * Cached result of goog.createTrustedTypesPolicy.\\n * @type {?TrustedTypePolicy|undefined}\\n * @private\\n */\\ngoog.html.trustedtypes.cachedPolicy_;\\n\\n\\n/**\\n * Creates a (singleton) Trusted Type Policy for Safe HTML Types.\\n * @return {?TrustedTypePolicy}\\n * @package\\n */\\ngoog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {\\n  'use strict';\\n  if (!goog.html.trustedtypes.POLICY_NAME) {\\n    // Binary not configured for Trusted Types.\\n    return null;\\n  }\\n\\n  if (goog.html.trustedtypes.cachedPolicy_ === undefined) {\\n    goog.html.trustedtypes.cachedPolicy_ =\\n        goog.createTrustedTypesPolicy(goog.html.trustedtypes.POLICY_NAME);\\n  }\\n\\n  return goog.html.trustedtypes.cachedPolicy_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"html\",\"trustedtypes\",\"POLICY_NAME\",\"define\",\"TRUSTED_TYPES_POLICY_NAME\",\"cachedPolicy_\",\"getPolicyPrivateDoNotAccessOrElse\",\"goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse\",\"undefined\",\"createTrustedTypesPolicy\"]\n}\n"]