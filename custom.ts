//% color="#AA278D" weight=100 icon="\uf085"
namespace lineSensor {
    let sensor1Pin = 0;
    let sensor2Pin = 0;
    let sensor3Pin = 0;
    let sensor4Pin = 0;
    let sensor5Pin = 0;

    //% block="set line sensors to|sensor 1 %p1|sensor 2 %p2|sensor 3 %p3|sensor 4 %p4|sensor 5 %p5"
    //% p1.fieldEditor="gridpicker" p1.fieldOptions.columns=4
    //% p2.fieldEditor="gridpicker" p2.fieldOptions.columns=4
    //% p3.fieldEditor="gridpicker" p3.fieldOptions.columns=4
    //% p4.fieldEditor="gridpicker" p4.fieldOptions.columns=4
    //% p5.fieldEditor="gridpicker" p5.fieldOptions.columns=4
    export function setLineSensorPins(
        p1: DigitalPin,
        p2: DigitalPin,
        p3: DigitalPin,
        p4: DigitalPin,
        p5: DigitalPin
    ) {
        sensor1Pin = p1;
        sensor2Pin = p2;
        sensor3Pin = p3;
        sensor4Pin = p4;
        sensor5Pin = p5;
    }

    //% block="read line sensors"
    export function readLineSensors(): string {
        let result = "";
        result += pins.digitalReadPin(sensor1Pin) == 1 ? "1" : "0";
        result += pins.digitalReadPin(sensor2Pin) == 1 ? "1" : "0";
        result += pins.digitalReadPin(sensor3Pin) == 1 ? "1" : "0";
        result += pins.digitalReadPin(sensor4Pin) == 1 ? "1" : "0";
        result += pins.digitalReadPin(sensor5Pin) == 1 ? "1" : "0";
        return result;
    }

    //% block="custom sensor pattern S1 %s1 S2 %s2 S3 %s3 S4 %s4 S5 %s5"
    //% s1.min=0 s1.max=1 s2.min=0 s2.max=1 s3.min=0 s3.max=1 s4.min=0 s4.max=1 s5.min=0 s5.max=1
    export function customSensorPattern(s1: number, s2: number, s3: number, s4: number, s5: number): string {
        return `${s1}${s2}${s3}${s4}${s5}`;
    }
}