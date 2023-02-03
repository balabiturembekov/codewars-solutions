# All Star Code Challenge #13: Pig Latin Translator

## Problem Description

Your friend Billybob has a crush on a girl named Emily and wants to talk with you about it, but doesn't want her to overhear. You can help him by translating your messages into pig latin.

## Requirements

Implement a function, `translate(input)`, that takes a string argument and returns the input string translated into "pig latin".

## Rules for Translation

1. Valid words are 2 or more letters long
2. If a word begins with a consonant (a letter NOT 'a','e','i','o', or 'u'), then the first letter is shifted to the end of the word and "ay" is added.

## Examples

Input: `"billy"`
Output: `"illybay"`

Input: `"emily"`
Output: `"emilyay"`

Note:

- If the input string is less than 2 letters, the input should be returned as is.

## Constraints

- The input string will only contain lowercase letters.
