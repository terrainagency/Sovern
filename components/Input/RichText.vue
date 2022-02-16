<template>
  <div>
    <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
      <button @click.prevent="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'border-black text-black': editor.isActive('heading', { level: 1 }) }" class="py-0.5 mt-1 px-2 border border-black/5 text-gray hover:text-black hover:bg-black/5 transition duration-150 rounded-lg">
        H1
      </button>
      <button @click.prevent="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'border-black text-black': editor.isActive('heading', { level: 2 }) }" class="py-0.5 mt-1 px-2 border border-black/5 text-gray hover:text-black hover:bg-black/5 transition duration-150 rounded-lg">
        H2
      </button>
      <button @click.prevent="editor.chain().focus().toggleBulletList().run()" :class="{ 'border-black text-black': editor.isActive('bulletList') }" class="py-0.5 mt-1 px-2 border border-black/5 text-gray hover:text-black hover:bg-black/5 transition duration-150 rounded-lg">
        Bullet List
      </button>
    </floating-menu>
    <editor-content :editor="editor" class="rich-text" />
  </div>
</template>

<script>
import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    FloatingMenu,
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: `
      `,
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>