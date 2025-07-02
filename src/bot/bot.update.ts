// import { Controller } from '@nestjs/common';
import { Context, Markup } from "telegraf";
import { BotService } from "./bot.service";
import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from "nestjs-telegraf";
import { callback } from "telegraf/typings/button";

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  
  @Start()
  async OnStart(@Ctx() ctx: Context) {
    await this.botService.start(ctx)
  }
  
  @On("contact")
  async oncontact(@Ctx() ctx: Context) {
    await this.botService.onContact(ctx)
  }
  
  @Command("stop")
  async onHElp(@Ctx() ctx: Context) {
    await this.botService.onStop(ctx)
  }
}
  //   @On("photo")
//   async onphoto(@Ctx() ctx: Context) {
  //     if ("photo" in ctx.message!) {
    //       console.log(ctx.message.photo);
    //       await ctx.replyWithPhoto(
      //         String(ctx.message.photo[ctx.message.photo.length - 1].file_id)
      //       );
      //     }
      //   }

//   @On("video")
//   async onvidieo(@Ctx() ctx: Context) {
//     if ("video" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.reply(String(ctx.message.video.file_name));
//     }
//   }

//   @On("sticker")
//   async onsticker(@Ctx() ctx: Context) {
//     if ("sticker" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.replyWithSticker(String(ctx.message.sticker.file_id));
//     }
//   }

//   @On("animation")
//   async onanimation(@Ctx() ctx: Context) {
//     if ("animation" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.replyWithAnimation(String(ctx.message.animation.file_id));
//     }
//   }
//   @On("document")
//   async ondocument(@Ctx() ctx: Context) {
//     if ("document" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.replyWithDocument(String(ctx.message.document.file_id));
//     }
//   }


//   @On("location")
//   async onlocation(@Ctx() ctx: Context) {
//     if ("location" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.reply(String(ctx.message.location.latitude));
//       await ctx.reply(String(ctx.message.location.longitude));
//       await ctx.replyWithLocation(
//         ctx.message.location.latitude,
//         ctx.message.location.longitude
//       );
//     }
//   }

//   @On("voice")
//   async onvoice(@Ctx() ctx: Context) {
//     if ("voice" in ctx.message!) {
//       // console.log(ctx.message.video);
//       await ctx.reply(String(ctx.message.voice.duration));
//       await ctx.reply(String(ctx.message.voice.file_id));
//       await ctx.reply(String(ctx.message.voice.file_size));
//       await ctx.reply(String(ctx.message.voice.mime_type));
//       await ctx.reply(String(ctx.message.voice.file_unique_id));
//     }
//   }

//   @Hears("hi")
//   async onHearsHi(@Ctx() ctx: Context) {
//     await ctx.replyWithHTML("heellloooooooooooo..");
//   }

//   @Command("inline")
//   async onCommandInLine(@Ctx() ctx: Context) {
//     // await ctx.replyWithHTML("ertaga yordam beraman... 🖕🏻");
//     const inlineKeyBoard = [
//       [
//         { text: "Product1", callback_data: "product_1" },
//         { text: "Product2", callback_data: "product_2" },
//         { text: "Product3", callback_data: "product_3" },
//       ],
//       [
//         { text: "Product4", callback_data: "product_4" },
//         { text: "Product5", callback_data: "product_5" },
//       ],
//       [{ text: "Product6", callback_data: "product_6" }],
//     ];
//     await ctx.reply("kerakli productni talla", {
//       reply_markup: {
//         inline_keyboard: inlineKeyBoard,
//       },
//     });
//   }

//   // @Action("product_1")
//   // async onAcPro1(@Ctx() ctx: Context) {
//   //   await ctx.replyWithHTML("product 1 talandu... 🖕🏻");
//   // }

//   // @Action("product_2")
//   // async onAcPro2(@Ctx() ctx: Context) {
//   //   await ctx.replyWithHTML("product 2 talandu... 🖕🏻");
//   // }

//   @Action(/product_\d+/)
//   async onActionAnyPro(@Ctx() ctx: Context) {
//     if ("data" in ctx.callbackQuery!) {
//       const data = ctx.callbackQuery?.data;
//       const productId = data.split("_")[1];
//       await ctx.replyWithHTML(`${productId} bosildi`);
//     }
//   }

//   @Command("main")
//   async onMain(@Ctx() ctx: Context) {
//     await ctx.replyWithHTML("kerakli main button ni tanla", {
//       ...Markup.keyboard([
//         ["1"], 
//         ["2", "3"], 
//         ["4", "5", "6"], 
//         [Markup.button.contactRequest("trlrfon raqamingizni yuboring")],
//         [Markup.button.locationRequest("lokatsiani yuboring")]
//       ]).resize().oneTime()
//     });
//   }

//    @Hears("1")
//    async onH1(@Ctx() ctx: Context) {
//     await ctx.replyWithHTML("1 - osildi")
//    }
//    @Hears("2")
//    async onH2(@Ctx() ctx: Context) {
//     await ctx.replyWithHTML("2 - osildi")
//    }
//    @Hears("3")
//    async onH3(@Ctx() ctx: Context) {
//     await ctx.replyWithHTML("3 - osildi")
//    }

//   @On("text")
//   async onText(@Ctx() ctx: Context) {
//     // console.log(ctx);

//     if ("text" in ctx.message!) {
//       if (ctx.message.text == "lo") {
//         ctx.replyWithHTML(`<b>HELLO</b>`);
//       } else {
//         ctx.replyWithHTML(ctx.message.text);
//       }
//     }
//   }
//   @On("message")
//   async onMessage(@Ctx() ctx: Context) {
//     // console.log(ctx.botInfo);
//     // console.log(ctx.chat);
//     // console.log(ctx.chat!.id);
//     // console.log(ctx.from);
//     // console.log(ctx.from!.id);
//   }

