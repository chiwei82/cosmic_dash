// js/entities/debris/debris.js
class SpaceItem {
    constructor(x, y, speed = 2, size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size
        this.isActive = true; // State flag to safely manage removal
    }

    // Generic movement that can be overridden if needed
    updatePosition() {
        this.x -= this.speed;
    }

    show() {
        console.warn("show() should be implemented by the child class");
    }
}