//interface Square {
//    kind: "square";
//    size: number;
//}

//interface Rectangle {
//    kind: "rectangle";
//    width: number;
//    height: number;
//}

//interface Circle {
//    kind: "circle";
//    radius: number;
//}

//type Shape = Square | Rectangle | Circle;

//function area(s: Shape) {
//    switch (s.kind) {
//        case "square": return s.size * s.size;
//        case "rectangle": return s.width * s.height;
//        case "circle": return Math.PI * s.radius * s.radius;
//    }
//}

//function test1(s: Shape) {
//    if (s.kind === "square") {
//        s;  // Square
//    }
//    else {
//        s;  // Rectangle | Circle
//    }
//}

//function test2(s: Shape) {
//    if (s.kind === "square" || s.kind === "rectangle") {
//        return;
//    }
//    s;  // Circle
//}