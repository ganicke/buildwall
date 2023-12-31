
/**
* Use this file to define custom functions and blocks.
* Read more at https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}

/**
 * BuildWall blocks
 */
//% weight=100 color=#FF8040 icon="\uf00a"
namespace BuildWall {
    /**
     * Build a single wall of blocks
     * @param wide number of blocks wide, eg: 5
     * @param high number of blocks high, eg: 2
     * @param block the block to build with, eg: BRICKS
     */
    //% block="build a wall %wide wide by %high high using %block"
    //% block.shadow=minecraftBlock
    export function buildWall(wide: number, high: number, block: number): void {
        blocks.fill(
            block,
            pos(0, 2, 0),
            pos(0, high + 2, wide),
            FillOperation.Replace
        )
    }

    /**
     * Build a square enclosure of blocks
     * @param wide number of blocks wide, eg: 5
     * @param high number of blocks high, eg: 2
     * @param block the block to build with, eg: BRICKS
     */
    //% block="build an enclosure %wide wide by %high high using %block"
    //% block.shadow=minecraftBlock
    export function enclose(wide: number, high: number, block: number): void {
        blocks.fill(
            block,
            pos(wide / -2, high, wide / -2),
            pos(wide / 2, high, wide / 2),
            FillOperation.Outline
        )
    }
}
