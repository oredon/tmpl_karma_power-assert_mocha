"use strict";

var assert = require('power-assert');

describe('TEST_1', function(){
    beforeEach(function(){
    	$("body").append(window.__html__["test/fixture.html"]);
    	this.myinputHidden = document.getElementById("hoge");
    	this.arr = [1,2,1,2];
    });
    describe('MY_TEST_NODE_1', function(){
        it('a-1', function(){
            assert(this.myinputHidden.value === "100");
        });
        it('a-2', function(){
            assert(this.myinputHidden.value);
        });
        it('a-3', function () {
            assert(this.arr[0]===this.arr[3]);
        });
        it('a-4', function () {
            assert(1===2);
        });
    });
});
