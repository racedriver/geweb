<template>
  <div class="section position-relative overflow-hidden no-padding-bottom">
    <Title>our process</Title>
    <div class="container margin-bottom">
      <div class="col text-align-center block-centered lg-8 md-12">
        <div class="text-medium-white margin-top">
          <h2>Software Development Life Cycle</h2>
        </div>
      </div>
    </div>
    <template v-for="(process, index) in processes">
      <OurProcessLeft
        v-if="index % 2 === 0"
        :entry="{
          id: index + 1,
          special: index === processes.length - 1,
          ...process,
        }"
      />
      <OurProcessRight
        v-if="index % 2 === 1"
        :entry="{
          id: index + 1,
          special: index === processes.length - 1,
          ...process,
        }"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'OurProcess',
  data() {
    return {
      processes: [
        {
          image: '/images/planing.png',
          title: 'Project Definition',
          text:
            'Skylines One Strategise The Ideas And Concepts With You Until We Are \n' +
            'Satisfied You Have What You Need To Bring A Great Product To Life.',
        },
        {
          image: '/images/wireframes.png',
          title: 'Wireframes and Application Architecture',
          text:
            'The Wireframe Will Ensure The Ideas And Concepts Are Brought To \n' +
            'Paper Correctly And The Application Architecture In The Early Stage \n' +
            'Meand Less Surprises In The Development Phase. You Will Thank Us For \n' +
            'It.',
        },
        {
          image: '/images/Visual%20Design%20app.png',
          title: 'Visual Design',
          text:
            'We Will Create And You Will Verify The Visual Design Before We Begin \n' +
            'The Development Process.',
        },
        {
          image: '/images/application%20development.png',
          title: 'Application Development',
          text:
            " Let Us Do The Magic. We'll Keep You Up-to-date During The Entire Process.",
        },
        {
          image: '/images/user%20testing.png',
          title: 'User Testing',
          text:
            'User Experience Is Most Important Since It Translates To Customer\n' +
            'Satisfaction And Customer Retention. We Will Be Especially Careful\n' +
            'To Deliver A World-Class Customer Experience For You And Your\n' +
            'Customers.',
        },
        {
          image: '/images/software%20launch.png',
          title: 'Launch',
          text:
            'This Is The Most Fun Part Of The Project. It Usually Involves\n' +
            'Champagne, But Also Careful Consideration From Operations During\n' +
            'Deployment.',
        },
        {
          image: '/images/Maintenance%20&%20Support.png',
          title: 'Maintenance & Support',
          text:
            'Our Dedicated Customer Support Team Will Be There 24/7 To Answer\n' +
            'Questions And Resolve Technical Issues With Speed and Precision.\n' +
            'Guaranteed.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
