function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
    }
}
function test1(s) {
    if (s.kind === "square") {
        s; // Square
    }
    else {
        s; // Rectangle | Circle
    }
}
function test2(s) {
    if (s.kind === "square" || s.kind === "rectangle") {
        return;
    }
    s; // Circle
}
