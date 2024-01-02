
# Notes on problem solving

## Steps for solving problems

#### Understanding the problem

- Reword it
- Draw diagrams
- Be able to reword the problem to someone else

#### Planning out the problem

- Does the code have user interface
- What does the code look like
- Inputs outputs?
- Given inputs how can we get the desired output?

#### Pseudocode

- slow down and write steps of the program

#### Divide and conquer

- Do the simplest code first
- Do not solve one big problem at a time

# Understanding Errors

#### The anatomy of an error

an error is a type objecet built into the JS language, consisting of a name/type and a message.

- You can often find the file.js that's giving the error and the line
- The stack trace will help us trace back to the origin of the mistake

#### Types of Errors

- Reference error: when the code refers to a variable that is not delared and/or initialized within the current scope
- Syntax error: when the code is not written correctly
- Type error: exists when: 
    - an operand or argument passed to a function is incompatible with the type expected by that operator or function
    - when attemping to modify a value that cannot be changed
    - when attemping to use a value in an inappropriate way

#### Tips for resolving errors

- read the error carefully
- google the error!
- use the debugger
- use print functions to get immediate feedback

#### Errors vs Warnings

- wanings are not errors
- they give warnings for potential errors

#### A Note on Clean Code

- camelCase
    - is the naming convention that allowed writing multiple words together without spaces of punctuation
- a good name is descriptive
- use a consistent vocabulary
- use names that are immediately understandable
- use **git log** to track changes instead of putting uneccesary comments
- comments should tell why the code is there


