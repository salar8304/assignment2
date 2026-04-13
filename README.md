Development process :
    
        Initial Request: 
        Translate a Figma prototype for "Assignment 2" into a clean, 
        dark-themed e-commerce gallery using HTML and CSS only.
        
        The Process & Creative Outbursts:
    

    1. THE "CLICKABLE CARD" CONFLICT
       User Request: "I want the whole shoe card to be a link, but the heart 
       button needs to be clickable separately without refreshing the page."
       
       AI Adjustment: 
       Implemented a layered 'Z-Index' strategy. I used an invisible <a> tag 
       (z-index: 1) to cover the card and a button (z-index: 10) for the heart. 
       Changed href="#" to javascript:void(0) to stop the "page-jump" refresh.
    

    2. THE "TRIPLE STICKY" LAYOUT
       User Request: "I want the announcement ribbon, the navbar, and the 
       sidebar to stay visible while I scroll... like separate scrolls."
       
       AI Adjustment: 
       This was a major layout shift. I calculated 'top' offsets for each 
       element (35px for navbar, 130px for sidebar) so they "stack" 
       without overlapping. Used 'height: calc(100vh - offset)' to ensure 
       the sidebar behaves like an independent window.
    

    3. THE "FILLED HEART" INTERACTION
       User Request: "The hearts used to be just contours; I want them to 
       turn solid red when I click them."
       
       AI Adjustment: 
       Since we are in Assignment 2 (No JS files allowed), I used an 
       inline 'onclick' toggle on the HTML elements. In CSS, I defined 
       the '.active' class to change the color and fill, giving you 
       instant visual feedback.
    

    4. SIDEBAR & NAV ALIGNMENT FIXES
       User Request: "You've messed up the sort by... the navigation links 
       are vertical and blue now. Fix the cart too!"
       
       AI Adjustment: 
       Re-applied 'display: flex' and 'list-style: none' to force the 
       navigation back to a horizontal line. I used 'display: block' 
       on sidebar labels to ensure the radio buttons stack vertically 
       exactly like the Figma mockup.
    

    5. DATA INTEGRITY (Assignment Requirements)
       User Request: "Add all shoes from the PDF back... and make sure 
       the ones with the fire emoji have it."
       
       AI Adjustment: 
       Hard-coded all 6 unique products (Adidas, Asics, NB, Nike, Puma x2) 
       ensuring prices like "$44.90" and "🔥" emojis were perfectly 
       synchronized with your official product list.



AI Collaboration & Development Process: Assignment 3
This project marks the transition from a static prototype to a dynamic, data-driven e-commerce platform. Below is a summary of the requests made and the technical adjustments implemented to achieve the final result.

1. Dynamic Data Implementation
User Request: Transition the gallery from hard-coded HTML cards to a system that loads data from an external database.

Adjustment: Created a centralized loadData function using Async/Await to fetch the dataset. Developed a "Card Template" that dynamically generates HTML for each shoe, ensuring currency is consistently formatted with two decimal places (e.g., $79.90).

2. Intelligent Filtering & Navigation
User Request: Enable the navbar links (Men/Women) and sidebar buttons to filter the display in real-time.

Adjustment: Implemented a global allShoes array to store the dataset. Integrated .filter() logic that allows users to isolate products by gender or brand without refreshing the page.

Dynamic Brand List: To ensure scalability, I built a script that automatically generates brand buttons based on the actual items in the stock. If a new brand is added to the data, a filter button for it appears automatically.

3. Curated "Most Popular" Section
User Request: Display a specific selection of shoes in the top section: Stan Smith, Air Force 1 Low White, Forum Low OG, Gel-Quantum, and RS-Z.

Adjustment: Developed a targeted filter to identify these specific models. I modified the data on the fly to ensure these items carry a "fire emoji" badge to denote their popularity.

4. Logic-Based Visual Styling (The "Hotness" Ratio)
User Request: Add fire emojis to other shoes throughout the gallery, but keep it looking reasonable.

Adjustment: Applied a Math.random() logic to the general catalog. This ensures that approximately 1 out of every 6 shoes is marked with a fire emoji, creating a "trending" visual effect that feels curated rather than cluttered.

5. Advanced Sorting System
User Request: Allow users to organize the store by price and name.

Adjustment: Linked the sidebar radio buttons to a .sort() algorithm. Users can toggle between "Price Low to High," "Price High to Low," and "Alphabetical (A-Z)" views instantly.

6. User Experience (UX) Enhancements
User Request: Add "Favorites" and "Account" sections to make the site feel like a real store.

Adjustment: Reconfigured the navigation bar to include a "Favorites ❤️" tag and an "Account 👤" portal, bringing the interface in line with modern e-commerce standards.

Technical Skills Demonstrated:

DOM Manipulation

Asynchronous JavaScript (Fetch API)

Array Methods (Filter, Sort, Map, ForEach)

Dynamic HTML Templating

Event Handling and Data-Attributes


Link to chat: https://gemini.google.com/share/de7c6f8d0a2b
Link to figma: https://www.figma.com/design/omjBdbb9SQCrsAE3vL3WYr/salar.hajisadeghkashi-s-team-library?node-id=3317-2&t=NiIoifh7DbT5BkC1-1
