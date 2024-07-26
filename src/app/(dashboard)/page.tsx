import { CourseGrid } from "@/components/common";
import CourseItem from "@/components/course/CourseItem";
import Heading from "@/components/typography/Heading";
import createUser from "@/lib/actions/user.actions";
import React from "react";

const page = async () => {
  // const user = await createUser({
  //   clerkId: "clerk_123",
  //   email: "trannguyenvu3482@gmail.com",
  //   username: "trannguyenvu3482",
  // });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourseGrid>
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </CourseGrid>
    </div>
  );
};

export default page;
