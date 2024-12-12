# React useEffect Cleanup Not Called on Unmount

This repository demonstrates a common issue with React's `useEffect` hook where the cleanup function isn't called when the component unmounts.

## Problem

The issue arises when a component using `useEffect` with a cleanup function is unmounted before the next render cycle. In such cases, the cleanup function may not be executed, potentially leading to memory leaks or unexpected behavior.

## Solution

The solution involves carefully managing the dependencies in the `useEffect` hook's dependency array.  Ensure that the effect only runs when necessary and that the cleanup function is properly implemented to handle any necessary resources.

## How to reproduce the bug

1. Clone the repository.
2. Run `npm install`
3. Run `npm start`
4. Observe the console logs.  The cleanup function may not be called on unmount because of improper cleanup function usage.