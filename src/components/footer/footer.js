/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';

// export default function Footer() {
//     return (
//       <div>
      
//       <h3> Copyright by PhilipLee</h3>

//       </div>
//     );
//   }
  

// Below is component styled with Styled-JSX

export default function Footer() {
    return (
      <div className="paragraph">
        <style jsx>{`
          .paragraph {
            font-size: 24px;
            fontWeight: "bold";
            color: blue;
            text-align: center;
          }

          .paragraph:hover {
            color: red;
          }
        `}</style>
        <p>COPYRIGHT by PhilipLee</p>
      </div>
    )
}    