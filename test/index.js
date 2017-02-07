"use strict";

import kiss from '../src';
import {describe} from 'mocha';
import {expect, assert} from 'chai';


describe('kiss', () => {
    it('should be a function', () => {
        expect(kiss).to.be.a('function');
    });

    it('should accept string iterator', () => {
        try{
            let tpl = kiss`hello ${world}`;
            return true;
        } catch( ex ){
            return false;
        }
    });

    it('should right context', () => {
        let world = 'world';
        let tpl = ctx => kiss`hello ${ctx.world}`;
        assert.equal(tpl({world}), "hello world");
    })

    it('should right array context', () => {
        let worlds = ['all', 'worlds', 'of', 'universals'];
        let tpl = ctx => kiss`hello ${ctx.worlds.map((word) => word).join(' ')}`;
        assert.equal(tpl({worlds}), "hello all worlds of universals");
    })

    it('should right multi-lines context', () => {
        let worlds = ['all', 'worlds', 'of', 'universals'];
        let tpl = ctx => kiss`
        hello
        ${ctx.worlds.map(
            (word) => word)
            .join(' ')}`;
            
        assert.equal(tpl({worlds}), `
        hello
        all worlds of universals`);
    })
})    