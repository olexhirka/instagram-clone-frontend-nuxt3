<script setup lang="ts">
import Avatar from '@@/components/Atom/Avatar.vue'
import { SizeAvatarEnum } from '@@/type'
import moment from 'moment'
import { useForceRenderTimer } from '@@/composables'

interface IProps {
  comment: any
}
defineProps<IProps>()

const { key } = useForceRenderTimer()
const { S } = SizeAvatarEnum
</script>

<template>
  <div class="mb-[10px]" :id="`post_detail_${comment.id}`">
    <div class="relative my-[5px] rounded-md">
      <div class="mx-[10px] flex items-center gap-[10px]">
        <NuxtLink :to="`/${comment.user.username}`">
          <Avatar :url="comment.user.profile_pic_url" :size="S" />
        </NuxtLink>
        <NuxtLink :to="`/${comment.user.username}`">
          <p
            class="inline-block bg-c2 px-[10px] py-[1px] text-c1 shadow-md line-clamp-1 dark:bg-c1 dark:text-c2"
          >
            {{ comment.user.username }}
          </p>
        </NuxtLink>
        <p class="text-[0.7rem] text-c3" :key="key">
          {{ moment(comment.created_at).fromNow() }}
        </p>
      </div>
      <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
        <p>{{ comment.text }}</p>
        <div class="mt-[5px] flex gap-[10px] text-[0.8rem]">
          <div class="flex gap-[3px] text-c13">
            <span>{{ comment.comment_like_count }}</span>
            <span class="cursor-pointer">Like</span>
          </div>
          <p class="cursor-pointer text-c13">Reply</p>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-full w-[3px] -translate-x-[0px] bg-c14"></div>
    </div>
    <div
      v-for="({ user, created_at, text, comment_like_count }, idx) in comment.reply"
      :key="idx"
      class="relative my-[5px] ml-[42px] rounded-md"
    >
      <div class="mx-[10px] flex items-center gap-[10px]">
        <NuxtLink :to="`/${user.username}`">
          <Avatar :url="user.profile_pic_url" :size="S" />
        </NuxtLink>
        <NuxtLink :to="`/${user.username}`">
          <p
            class="inline-block bg-c2 px-[10px] py-[1px] text-c1 shadow-md line-clamp-1 dark:bg-c1 dark:text-c2"
          >
            {{ user.username }}
          </p>
        </NuxtLink>
        <p class="text-[0.7rem] text-[#666]" :key="key">{{ moment(created_at).fromNow() }}</p>
      </div>
      <div class="ml-[52px] -translate-y-[3px] pr-[10px]">
        <p>{{ text }}</p>
        <div class="mt-[5px] flex gap-[10px] text-[0.8rem]">
          <div class="flex gap-[3px] text-c13">
            <span>{{ comment_like_count }}</span>
            <span class="cursor-pointer">Like</span>
          </div>
          <p class="cursor-pointer text-c13">Reply</p>
        </div>
      </div>
      <div class="absolute top-0 left-0 h-full w-[3px] -translate-x-[0px] bg-c12"></div>
    </div>
  </div>
</template>
