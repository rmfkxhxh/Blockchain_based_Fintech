function main() {
    fn2()
    console.log('main')

    function fn2() {
        console.log('fn2')
        fn3();
    }
    function fn3() {
        console.log('fn3')
        fn4();
    }
    function fn4() {
        console.log('fn4')
        fn5();
    }
    function fn5() {
        console.log('fn5')
        fn6();
    }
    function fn6() {
        console.log('fn6')

    }
}
main();

/*
    fn2
    fn3
    fn4
    fn5
    fn6
    main
*/