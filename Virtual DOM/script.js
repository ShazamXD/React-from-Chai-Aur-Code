/* HYDRATION Concept: Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki 
JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process 
ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti hai */

// documentation link save krlo https://github.com/acdlite/react-fiber-architecture read more about it here

/* what is RECONCILIATION: Reconciliation in React means the process of figuring out what changed in the UI and updating only that part, instead of reloading the entire page.

React keeps a virtual DOM (a copy of the real DOM in memory). When your state or props change:

React creates a new virtual DOM.

It compares the new virtual DOM with the previous one → This process is called Reconciliation.

It finds the differences (called diffing) and updates only those parts in the real DOM.

✅ In short:
React checks what changed → updates only that piece, making it fast. */

/* 
KEY TAKEAWAY FROM THE VIDEO

1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.

2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.

3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.

4. But some values depends on network call so if we update a value it might get update immediately via a network call.

5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.

6. The current algo used by the React is called the React Fibre algo.

7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.

8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.

9.In UI it is not necessary for every update to be applied immediately. 
*/

/* 
FIBER ALGO IN REACT: Fiber in React is the new engine (or algorithm) React uses to update the UI efficiently.

Before Fiber, React updated the whole component tree in one go (synchronously), which could block the browser for big apps.

With Fiber, React can:
-pause work and come back to it later.
-assign priority to different types of work.
-reuse previously completed work.
-abort work if it's no longer needed

👉 In simple words:
Fiber is like a smart scheduler inside React that decides what to update first and does it piece by piece, not all at once.*/