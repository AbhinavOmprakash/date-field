# date_field

Code repo for my blogpost [What makes frontend development tricky](https://www.abhinavomprakash.com/posts/what-makes-frontend-development-tricky/)
See it in action [here](https://abhinavomprakash.github.io/date-field/)

# Different approach. 

This was rewritten in re-frame with the idea that It would be much simpler. 
But this re-write failed when it came to the part where the date-range wants to set the error for the date-field. 

In this approach the state was duplicated in several layers. 
It was duplicated in panel-state, date-range, and date-field. Duplicated state is just bad. 
I'm not saying it can't be done this way, its just reached a point of complexity that isn't warranted by the behavior.

Now, IF the parent needs to control the child's behaviour the child must be stateless. just as how if we want to share the state between parent and child,
we need to "lift" it up, if we want to share control between two components, we need to "lift" it up. 

An alternate approach I want to try out is to create stateful and stateless versions of all components and see how that fares.

