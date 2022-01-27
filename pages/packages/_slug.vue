<template>
    <div>
        <BookingHeader v-bind:darkMode="false" />

        <main class="lg:px-1/12 xl:px-2/12 overflow-x-hidden">
            <section>
                <div class="overflow-x-hidden">
                    <div class="flex flex-wrap justify-center -mx-5 mb-10">
                        <ServiceCard v-for="service in collection.services" :key="service.id" v-bind:service="service" v-bind:collectionSlug="collection.slug" />
                    </div>
                    <!-- <fieldset class="w-full max-w-screen-sm mx-auto mb-10">
                        <p>3. Contact information</p>

                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="instagram" placeholder="Instagram" />
                        <input type="tel" name="phone" placeholder="Phone" />
                    </fieldset>

                    <fieldset class="w-full max-w-screen-sm mx-auto mb-10">
                        <p>3. Package option</p>
                        <input type="radio" name="contact_method" id="cm_text" value="Text">
                        <label for="cm_text" class="checkbox">2 Looks 5 Photos - $475</label>
                        <input type="radio" name="contact_method" id="cm_email" value="Text" checked>
                        <label for="cm_email" class="checkbox">3 Looks 8 Photos (Recommended) - $650</label>
                        <input type="radio" name="contact_method" id="cm_instagram" value="Text">
                        <label for="cm_instagram" class="checkbox">4 Looks 10 Photos - $875</label>
                    </fieldset> -->
                </div>
                
            </section>
        </main>
    </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
    async asyncData({ $graphcms, params }) {
        const { collection } = await $graphcms.request(
            gql`
                query GetServices($slug: String) {
                    collection(where: {slug: $slug}) {
                        title
                        slug
                        services {
                            id
                            title 
                            slug
                            isAvailable
                            description {
                                text
                            }
                            featuredImages {
                                id
                                url
                            }
                            additionalPhotos
                            cropping
                            aspectRatio
                            pricingOptions {
                                id
                                price
                                description
                            }
                        }
                    }
                }
            `,
             { slug: params.slug }
        )

        return { collection }
    }
}
</script>