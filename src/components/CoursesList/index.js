import React, { useState } from "react";
import { Container } from "./styles";
import Course from "../Course";
import { TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";

import courses from "../../data/courses";

export default function CoursesList() {
  const [form, setForm] = useState(0);

  if (form === 0) {
    return (
      <Container>
        {courses.map((course, index) => (
          <TouchableOpacity
            onPress={() => {
              setForm(1);
            }}
          >
            <Course
              key={index}
              image={course.image}
              title={course.title}
              subtitle={course.subtitle}
              logo={course.logo}
              author={course.author}
              avatar={course.avatar}
              caption={course.caption}
            />
          </TouchableOpacity>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        <WebView
          originWhitelist={["*"]}
          source={{
            uri: 'https://docs.google.com/forms/d/e/1FAIpQLSduTj7Mw2GXUv-Q2JkYcAlROx0kaqfFSBS0qFs3AlwKOAZvOw/viewform?usp=sf_link',
          }}
          sharedCookiesEnabled={true}
        />
      </Container>
    );
  }
}
